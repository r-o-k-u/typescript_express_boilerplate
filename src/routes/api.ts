import { Router } from "express";
import authController from "../api/controllers/authentication/authentication.controller";
const router = Router();

/**
 * @openapi
 * /api/auth/register:
 *  post:
 *     tags:
 *     - Authentication
 *     summary: Register a user
 *     requestBody:
 *      required: false
 *     responses:
 *      '200':
 *        description: Sign up successful
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
router.post("/auth/register", authController.register);
/**
 * @openapi
 * /api/auth/login:
 *  post:
 *     tags:
 *     - Authentication
 *     description: user login
 *     responses:
 *       200:
 *         description: user log in successfully
 */
router.post("/auth/login", authController.login);
/**
 * @openapi
 * /api/auth/logout:
 *  post:
 *     tags:
 *     - Authentication
 *     description: user logout
 *     responses:
 *       200:
 *         description: user log out successfully
 */
router.post("/auth/logout", authController.logout);
/**
 * @openapi
 * /api/auth/verify-email:
 *  post:
 *     tags:
 *     - Authentication
 *     description: verify email
 *     responses:
 *       200:
 *         description: request successful
 */
router.post("/auth/verify-email", authController.verifyEmail);
/**
 * @openapi
 * /api/auth/refresh-token:
 *  post:
 *     tags:
 *     - Authentication
 *     description: refresh token
 *     responses:
 *       200:
 *         description: request successful
 */
router.post("/auth/refresh-token", authController.refreshToken);
/**
 * @openapi
 * /api/auth/auth/forgot-password:
 *  post:
 *     tags:
 *     - Authentication
 *     description: forgot password
 *     responses:
 *       200:
 *         description: Request received
 */
router.post("/auth/forgot-password", authController.forgotPassword);
/**
 * @openapi
 * /api/auth/send-verification-code:
 *  post:
 *     tags:
 *     - Authentication
 *     description: send verification code
 *     responses:
 *       200:
 *         description: verification code sent successfully
 */
router.post(
  "/auth/send-verification-code",
  authController.sendVerificationCode
);

export default router;
