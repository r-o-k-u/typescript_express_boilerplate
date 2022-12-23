import { Router } from "express";
import { Request, Response } from "express";
import AdminController from "../controllers/api/adminController";
import AuthController from "../controllers/api/authController";
import UserController from "../controllers/api/userController";
import checkTenant from "../middleware/check_tenant";
const router = Router();
//AUTHENTICATION
/**
 * @openapi
 * '/api/auth/register':
 *  post:
 *     tags:
 *     - Authentication
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
router.post("/auth/register", AuthController.AuthenticationController.register);
/**
 * @openapi
 * '/api/auth/login':
 *  post:
 *     tags:
 *     - Authentication
 *     summary: User Login
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *            properties:
 *             phone_email:
 *              description: Users phone or email
 *              type: string
 *             password:
 *              description: Users password
 *              type: string
 *            required:
 *              - phone_email
 *              - password
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
router.post(
  "/auth/login",
  checkTenant,
  AuthController.AuthenticationController.login
);
/**
 * @openapi
 * '/api/auth/logout':
 *  post:
 *     tags:
 *     - Authentication
 *     summary: User Logout
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
router.post("/auth/logout", AuthController.AuthenticationController.logout);
/**
 * @openapi
 * '/api/auth/forgetPassword':
 *  post:
 *     tags:
 *     - Authentication
 *     summary: forget Password
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
router.post(
  "/auth/forgetPassword",
  AuthController.AuthenticationController.forgetPassword
);
/**
 * @openapi
 * '/api/auth/refresh Token':
 *  post:
 *     tags:
 *     - Authentication
 *     summary: refresh Token
 *     requestBody:
 *      required: false
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
router.post(
  "/auth/refreshToken",
  AuthController.AuthenticationController.refreshToken
);
/**
 * @openapi
 * '/api/auth/resetPassword':
 *  post:
 *     tags:
 *     - Authentication
 *     summary: Reset Password
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
router.post(
  "/auth/resetPassword",
  AuthController.AuthenticationController.resetPassword
);
/**
 * @openapi
 * '/api/auth/twoFactorAuth':
 *  post:
 *     tags:
 *     - Authentication
 *     summary: two Factor Authentication
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
router.post(
  "/auth/twoFactorAuth",
  AuthController.AuthenticationController.twoFactorAuth
);
/**
 * @openapi
 * '/api/auth/verifyAuthCode':
 *  post:
 *     tags:
 *     - Authentication
 *     summary: verify Authorization Code
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
router.post(
  "/auth/verifyAuthCode",
  AuthController.AuthenticationController.verifyAuthCode
);
/**
 * @openapi
 * '/api/auth/authenticate':
 *  post:
 *     tags:
 *     - Authentication
 *     summary: API authenticate
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
router.post(
  "/auth/authenticate",
  AuthController.AuthenticationController.apiAuthentication
);
/**
 * @openapi
 * '/api/auth/groups':
 *  get:
 *     tags:
 *     - Authentication
 *     summary: Retrieve a list of all AuthGroups in the database
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
router.get("/auth/group", AuthController.AuthGroupController.getAll);
/**
 * @openapi
 * '/api/auth/group/{id}':
 *  get:
 *     tags:
 *     - Authentication
 *     summary: Retrieve a specific AuthGroup by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The auth group  id
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
router.get("/auth/group/:id", AuthController.AuthGroupController.getById);
router.post("/auth/group", AuthController.AuthGroupController.create);
/**
 * @openapi
 * '/api/auth/group/{id}':
 *  patch:
 *     tags:
 *     - Authentication
 *     summary:  Update an existing AuthGroup
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The auth group  id
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
router.patch("/auth/group/:id", AuthController.AuthGroupController.update);
/**
 * @openapi
 * '/api/auth/group/{id}':
 *  delete:
 *     tags:
 *     - Authentication
 *     summary: Delete an existing AuthGroup
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The auth group  id
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
router.delete("/auth/group/:id", AuthController.AuthGroupController.delete);
/**
 * @openapi
 * '/api/auth/roles':
 *  get:
 *     tags:
 *     - Authentication
 *     summary: Retrieve a list of all AuthRoles in the database
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
router.get("/auth/roles", AuthController.AuthRoleController.getAll);
/**
 * @openapi
 * '/api/auth/role/{id}':
 *  get:
 *     tags:
 *     - Authentication
 *     summary: Retrieve a specific AuthRole by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The auth role  id
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
router.get("/auth/role/:id", AuthController.AuthRoleController.getById);
router.post("/auth/role", AuthController.AuthRoleController.create);
/**
 * @openapi
 * '/api/auth/role/{id}':
 *  patch:
 *     tags:
 *     - Authentication
 *     summary: Update an existing AuthRole
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The auth role  id
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
router.patch("/auth/role/:id", AuthController.AuthRoleController.update);
/**
 * @openapi
 * '/api/auth/role/{id}':
 *  delete:
 *     tags:
 *     - Authentication
 *     summary: Delete an existing AuthRole
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The auth role  id
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
router.delete("/auth/role/:id", AuthController.AuthRoleController.delete);
/**
 * @openapi
 * '/api/auth/permissions':
 *  get:
 *     tags:
 *     - Authentication
 *     summary: Retrieve a list of all AuthPermissions in the database
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
router.get("/auth/permissions", AuthController.AuthPermissionController.getAll);
/**
 * @openapi
 * '/api/auth/permission/{id}':
 *  get:
 *     tags:
 *     - Authentication
 *     summary: Retrieve a specific AuthPermission by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The auth permission  id
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
router.get(
  "/auth/permissions/:id",
  AuthController.AuthPermissionController.getById
);
router.post(
  "/auth/permissions",
  AuthController.AuthPermissionController.create
);
/**
 * @openapi
 * '/api/auth/permission/{id}':
 *  patch:
 *     tags:
 *     - Authentication
 *     summary: Update an existing AuthPermission
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The auth permission  id
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
router.patch(
  "/auth/permissions/:id",
  AuthController.AuthPermissionController.update
);
/**
 * @openapi
 * '/api/auth/permission/{id}':
 *  delete:
 *     tags:
 *     - Authentication
 *     summary: Delete an existing AuthPermission
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The auth permission  id
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
router.delete(
  "/auth/permissions/:id",
  AuthController.AuthRoleController.delete
);

//ADMIN

/**
 * @openapi
 * '/api/audit_log':
 *  get:
 *     tags:
 *     - Administration
 *     summary: Retrieve a list of all AuditLogs in the database
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
router.get("/audit_log", AdminController.AuditLog.getAll);
/**
 * @openapi
 * '/api/audit_log/{id}':
 *  get:
 *     tags:
 *     - Administration
 *     summary: Retrieve a specific AuditLog by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Audit Log id
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
router.get("/audit_log/:id", AdminController.AuditLog.getById);
/**
 * @openapi
 * '/api/audit_log':
 *  post:
 *     tags:
 *     - Administration
 *     summary: Create Audit Log
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
router.post("/audit_log", AdminController.AuditLog.create);
/**
 * @openapi
 * '/api/audit_log/{id}':
 *  patch:
 *     tags:
 *     - Administration
 *     summary: Update an existing AuditLog
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Audit Log id
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
router.patch("/audit_log/:id", AdminController.AuditLog.update);
/**
 * @openapi
 * '/api/audit_log/{id}':
 *  delete:
 *     tags:
 *     - Administration
 *     summary: Delete an existing AuditLog
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Audit Log id
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
router.delete("/audit_log/:id", AdminController.AuditLog.delete);

/**
 * @openapi
 * '/api/tenant':
 *  get:
 *     tags:
 *     - Administration
 *     summary: Retrieve a list of all Tenants in the database
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
router.get("/tenant", AdminController.Tenant.getAll);
/**
 * @openapi
 * '/api/tenant/{id}':
 *  get:
 *     tags:
 *     - Administration
 *     summary: Retrieve a specific Tenant by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The tenant  id
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
router.get("/tenant/:id", AdminController.Tenant.getById);
router.post("/tenant", AdminController.Tenant.create);
/**
 * @openapi
 * '/api/tenant/{id}':
 *  patch:
 *     tags:
 *     - Administration
 *     summary: Update an existing Tenant
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The tenant  id
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
router.patch("/tenant/:id", AdminController.Tenant.update);
/**
 * @openapi
 * '/api/tenant/{id}':
 *  delete:
 *     tags:
 *     - Administration
 *     summary: Delete an existing Tenant
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The tenant  id
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
router.delete("/tenant/:id", AdminController.Tenant.delete);

/**
 * @openapi
 * '/api/organization':
 *  get:
 *     tags:
 *     - Administration
 *     summary: Retrieve a list of all Organizations in the database
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
router.get("/organization", AdminController.Organization.getAll);
/**
 * @openapi
 * '/api/organization/{id}':
 *  get:
 *     tags:
 *     - Administration
 *     summary: Retrieve a specific Organization by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The organization  id
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
router.get("/organization/:id", AdminController.Organization.getById);
router.post("/organization", AdminController.Organization.create);
/**
 * @openapi
 * '/api/organization/{id}':
 *  patch:
 *     tags:
 *     - Administration
 *     summary: Update an existing Organization
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The organization  id
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
router.patch("/organization/:id", AdminController.Organization.update);
/**
 * @openapi
 * '/api/organization/{id}':
 *  delete:
 *     tags:
 *     - Administration
 *     summary: Delete an existing Organization
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The organization  id
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
router.delete("/organization/:id", AdminController.Organization.delete);

/**
 * @openapi
 * '/api/user':
 *  get:
 *     tags:
 *     - Users
 *     summary: Retrieve a list of all Users in the database
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
router.get("/user", UserController.UserController.getAll);
/**
 * @openapi
 * '/api/user':
 *  get:
 *     tags:
 *     - Users
 *     summary: Retrieve a list of all Users in the database
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
router.get("/user/:id", UserController.UserController.getById);
/**
 * @openapi
 * '/api/user/{id}':
 *  patch:
 *     tags:
 *     - Users
 *     summary: Update an existing Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The User  id
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
router.patch("/user/:id", UserController.UserController.update);
/**
 * @openapi
 * '/api/user/{id}':
 *  delete:
 *     tags:
 *     - Users
 *     summary: Delete an existing User
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The User  id
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
router.delete("/user/:id", UserController.UserController.delete);
/**
 * @openapi
 * '/api/user/profile/{id}':
 *  get:
 *     tags:
 *     - Users
 *     summary: Retrieve a specific User profile
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The User  id
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
router.get("/user/profile/:id", UserController.UserController.getProfile);
/**
 * @openapi
 * '/api/user/group':
 *  get:
 *     tags:
 *     - Users
 *     summary: Retrieve a specific User by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The User  id
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
router.get("/user/group", UserController.UserController.getGroups);
/**
 * @openapi
 * '/api/user/group/{id}':
 *  patch:
 *     tags:
 *     - Users
 *     summary: Update an existing User group
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The User  id
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
router.patch("/user/group/:id", UserController.UserController.updateGroups);
/**
 * @openapi
 * '/api/user/profile/{id}':
 *  patch:
 *     tags:
 *     - Users
 *     summary: Update an existing User profile
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The User  id
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
router.patch("/user/profile/:id", UserController.UserController.updateProfile);

export default router;
