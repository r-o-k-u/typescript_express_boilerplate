import express, { Router, Request, Response } from "express";
import { request } from "http";
import authController from "../services/authentication/authentication.controller";
const router = Router();

/**
 * @openapi
 * '/api/register':
 *  post:
 *     tags:
 *     - Register
 *     summary: Register a user
 *     requestBody:
 *      required: true
 *     responses:
 *      '200':
 *        description: OK
 *      400:
 *        description: Bad request
 *      401':
 *        description: Authorization information is missing or invalid.
 *      404':
 *        description: Not found.
 *      409:
 *        description: Conflict
 *      5XX':
 *        description: server error.
 */
router.post("/register", authController.register);
/**
 * @openapi
 * /auth/login:
 *  post:
 *     tags:
 *     - Register
 *     description: user login
 *     responses:
 *       200:
 *         description: user log in successfully
 */
router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.post("/verify-email", authController.verifyEmail);
router.post("/refresh-token", authController.refreshToken);
router.post("/forgot-password", authController.forgotPassword);
router.post("/send-verification-code", authController.sendVerificationCode);

export default router;
