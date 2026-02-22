
import { FastifyInstance } from "fastify";
import { prisma } from "../plugins/prisma";
import { verifyPassword } from "../utils/hash";
import { LOGIN_BLOCK_TIME, MAX_LOGIN_ATTEMPTS } from "../config/auth.config";

export async function loginService(
  app: FastifyInstance,{
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user = await prisma.user.findUnique({ where: { email } });
  const key = `login:attempts:${email}`
  const attempts = await app.redis.get(key);

  if (!user) {
    await registerFailedAttempt(app, key);
    const error: any = new Error("User not found");
    error.code = "USER_NOT_FOUND";
    throw error;
    
  }

  if (attempts && Number(attempts) >= MAX_LOGIN_ATTEMPTS) {
    const error: any = new Error("User temporarily blocked");
    error.code = "USER_BLOCKED";
    throw error;
  }
  
  const isPassword = await verifyPassword(password, user.password);
  if (!isPassword) {
    await registerFailedAttempt(app, key);
    const error: any = new Error("Invalid credentials");
    error.code = "INVALID_CREDENTIALS";
    throw error;
  }

  await app.redis.del(key);

  return { id: user.id, email: user.email };
}

async function registerFailedAttempt(app: FastifyInstance, key: string) {
  const attempts = await app.redis.incr(key);

  if (attempts === 1) {
    await app.redis.expire(key, LOGIN_BLOCK_TIME);
  }
}