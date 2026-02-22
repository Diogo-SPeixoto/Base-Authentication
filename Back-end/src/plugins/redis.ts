import fp from "fastify-plugin";
import fastifyRedis from '@fastify/redis'

const redisPlugin = fp(async (app) => {
  app.register(fastifyRedis, {
    host: '127.0.0.1',
    port: 6379,
  });
});

export default redisPlugin;

