
import { FastifyInstance } from "fastify";
import { loginHandler, logoutHandler, refreshTokenHandler } from "../../controllers/auth.controller";

export async function authRoutes(app: FastifyInstance) {
    app.post("/login", loginHandler);
    app.post("/refresh", refreshTokenHandler);
    app.delete("/logout", logoutHandler);
}