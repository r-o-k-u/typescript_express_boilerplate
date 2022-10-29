import { Router } from "express";
import authController from "../controllers/authentication/authentication.controller";
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
 *        description: user registration successful
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
 * /api/auth/login:
 *  post:
 *     tags:
 *     - Authentication
 *     summary: User login
 *     requestBody:
 *      required: false
 *     responses:
 *      '200':
 *        description: user login  successful
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
router.post("/login", authController.login);
/**
 * @openapi
 * /api/auth/logout:
 *  post:
 *     tags:
 *     - Authentication
 *     summary: Logout a user
 *     requestBody:
 *      required: false
 *     responses:
 *      '200':
 *        description: user logout  successful
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
router.post("/logout", authController.logout);
/**
 * @openapi
 * /api/auth/verify-account:
 *  post:
 *     tags:
 *     - Authentication
 *     description: verify account
 *     summary: Verify account
 *     requestBody:
 *      required: false
 *     responses:
 *      '200':
 *        description: account verification  successful
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
router.post("/verify-account", authController.verifyAccount);
/**
 * @openapi
 * /api/auth/refresh-token:
 *  post:
 *     tags:
 *     - Authentication
 *     description: refresh token
 *     summary: Refresh token
 *     requestBody:
 *      required: false
 *     responses:
 *      '200':
 *        description: r=token refresh successful
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
//router.post("/refresh-token", authController.refreshToken);
/**
 * @openapi
 * /api/auth/auth/forgot-password:
 *  post:
 *     tags:
 *     - Authentication
 *     description: forgot password
 *     summary: Forgot password
 *     requestBody:
 *      required: false
 *     responses:
 *      '200':
 *        description: password reset request received successfully
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
router.post("/forgot-password", authController.forgotPassword);

export default router;
