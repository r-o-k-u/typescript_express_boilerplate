import { Router } from "express";
import {
  TenantController,
  OrganizationController,
  AuditLogController,
} from "../controllers/api/adminController";
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
 *     description: Registers a new user
 *     summary: User Registration
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *            properties:
 *             firstName:
 *              description: First name of the user
 *              type: string
 *              example: John
 *             lastName:
 *              description: Last name of the user
 *              type: string
 *              example: John
 *             username:
 *              description: Username of the user
 *              type: string
 *              example: John
 *             email:
 *              description: email address of the user
 *              type: string
 *              example: contact@qwerty.co.ke
 *             phone:
 *              description: Phone number  of the user
 *              type: string
 *              example: 25477777777
 *             password:
 *              description: Password for the user
 *              type: string
 *              example: change me
 *             referral_code:
 *              description: referral code if any
 *              type: string
 *              example:
 *             channel:
 *              description: channel from which registration was done 1- web 2- app
 *              type: number
 *              example: 1
 *            required:
 *              - firstName
 *              - lastName
 *              - phone
 *              - email
 *              - password
 *              - channel
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
  "/auth/register",
  checkTenant,
  AuthController.AuthenticationController.register
);
/**
 * @openapi
 * '/api/auth/login':
 *  post:
 *     tags:
 *     - Authentication
 *     description: Logs in a user
 *     summary: User Login
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *            properties:
 *             email:
 *              description: Users email
 *              type: string
 *              example: contact@qwerty.co.ke
 *             phone:
 *              description: Users phone
 *              type: number
 *              example: 0202222222
 *             password:
 *              description: Users password
 *              type: string
 *              example: change me
 *            required:
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
  "/auth/logout",
  checkTenant,
  AuthController.AuthenticationController.logout
);
/**
 * @openapi
 * '/api/auth/forgot-password':
 *  post:
 *     tags:
 *     - Authentication
 *     description: Sends password reset email to a user
 *     summary: Forgot Password
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *            properties:
 *             email:
 *              description: User's email
 *              type: string
 *             phone:
 *              description: User's phone
 *              type: string
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
  checkTenant,
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
  checkTenant,
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
  checkTenant,
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
  checkTenant,
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
  checkTenant,
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
  checkTenant,
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
router.get(
  "/auth/group",
  checkTenant,
  AuthController.AuthGroupController.getAll
);
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
router.get(
  "/auth/group/:id",
  checkTenant,
  AuthController.AuthGroupController.getById
);
/**
 * @openapi
 * '/api/auth-groups':
 *  post:
 *     tags:
 *     - Authentication
 *     description: Creates a new auth group
 *     summary: Create Auth Group
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *            properties:
 *             name:
 *              description: Name of the auth group
 *              type: string
 *              example: Super Admin
 *             description:
 *              description: Description of the auth group
 *              type: string
 *              example: Main System administrators
 *            required:
 *              - name
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
  "/auth/group",
  checkTenant,
  AuthController.AuthGroupController.create
);
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
router.patch(
  "/auth/group/:id",
  checkTenant,
  AuthController.AuthGroupController.update
);
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
router.delete(
  "/auth/group/:id",
  checkTenant,
  AuthController.AuthGroupController.delete
);
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
router.get(
  "/auth/roles",
  checkTenant,
  AuthController.AuthRoleController.getAll
);
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
router.get(
  "/auth/role/:id",
  checkTenant,
  AuthController.AuthRoleController.getById
);
/**
 * @openapi
 * '/api/auth-roles':
 *  post:
 *     tags:
 *     - Auth Roles
 *     description: Creates a new auth role
 *     summary: Create Auth Role
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *            properties:
 *             name:
 *              description: Name of the auth role
 *              type: string
 *              example: Admin
 *             description:
 *              description: description of role
 *              type: string
 *              example: System Administration Role
 *            required:
 *              - name
 *              - code
 *     responses:
 *      '201':
 *        description: Created
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
  "/auth/role",
  checkTenant,
  AuthController.AuthRoleController.create
);
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
router.patch(
  "/auth/role/:id",
  checkTenant,
  AuthController.AuthRoleController.update
);
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
router.delete(
  "/auth/role/:id",
  checkTenant,
  AuthController.AuthRoleController.delete
);
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
router.get(
  "/auth/permissions",
  checkTenant,
  AuthController.AuthPermissionController.getAll
);
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
  checkTenant,
  AuthController.AuthPermissionController.getById
);
/**
 * @openapi
 * '/api/auth-permissions':
 *  post:
 *     tags:
 *     - Auth Permissions
 *     description: Creates a new auth permission
 *     summary: Create Auth Permission
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *            properties:
 *             name:
 *              description: Name of the auth role
 *              type: string
 *              example: View
 *             description:
 *              description: description of role
 *              type: string
 *              example: only view permissions
 *            required:
 *              - name
 *              - code
 *     responses:
 *      '201':
 *        description: Created
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
  "/auth/permissions",
  checkTenant,
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
  checkTenant,
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
  checkTenant,
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
router.get("/audit_log", checkTenant, AuditLogController.getAll);
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
router.get("/audit_log/:id", checkTenant, AuditLogController.getById);
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
router.post("/audit_log", checkTenant, AuditLogController.create);
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
router.patch("/audit_log/:id", checkTenant, AuditLogController.update);
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
router.delete("/audit_log/:id", checkTenant, AuditLogController.delete);

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
router.get("/tenant", checkTenant, TenantController.getAll);
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
router.get("/tenant/:id", checkTenant, TenantController.getById);
/**
 * @openapi
 * '/api/tenant':
 *  post:
 *     tags:
 *     - Administration
 *     description: Creates a new tenant
 *     summary: Create Tenant
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *            properties:
 *              organizationId:
 *                description: ID of the organization the tenant belongs to
 *                type: string
 *                required: true
 *                example: 1
 *              name:
 *                description: Name of the tenant
 *                type: string
 *                example: tenant 1
 *              email:
 *                description: Email of the tenant
 *                type: string
 *                example: contact@qwerty.co.ke
 *              phoneNumber:
 *                description: Phone number of the tenant
 *                type: string
 *                example: 254743411403
 *              website:
 *                description: Website of the tenant
 *                type: string
 *                example: localhost:3333
 *              description:
 *                description: description of the tenant
 *                type: string
 *                example: tenant One
 *              logo:
 *                description: Logo of the tenant
 *                type: string
 *                example: https://res.cloudinary.com/dihzljuvb/image/upload/v1662269776/qwerty/qwerty_hlfpqr.png
 *              address:
 *                description: Address of the tenant
 *                type: object
 *                properties:
 *                  street:
 *                    description: Street address of the tenant
 *                    type: string
 *                    example: Just
 *                  city:
 *                    description: City of the tenant
 *                    type: string
 *                    example: Around
 *                  state:
 *                    description: State of the tenant
 *                    type: string
 *                    example: Here
 *                  zipCode:
 *                    description: Zip code of the tenant
 *                    type: string
 *                    example: 1234
 *                  country:
 *                    description: Country of the tenant
 *                    type: string
 *                    example: Kenya
 *            required:
 *              - organizationId
 *     responses:
 *      '201':
 *        description: Created
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
 * */
router.post("/tenant", checkTenant, TenantController.create);
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
router.patch("/tenant/:id", checkTenant, TenantController.update);
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
router.delete("/tenant/:id", checkTenant, TenantController.delete);

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
router.get("/organization", checkTenant, OrganizationController.getAll);
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
router.get("/organization/:id", checkTenant, OrganizationController.getById);
/**
 * @openapi
 * '/api/organization':
 *  post:
 *    tags:
 *    - Administration
 *    description: Creates a new organization
 *    summary: Create Organization
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            properties:
 *              name:
 *                description: Name of the organization
 *                type: string
 *                example: Organization 1
 *              email:
 *                description: Email of the organization
 *                type: string
 *                example: contact@qwerty.co.ke
 *              phoneNumber:
 *                description: Phone number of the organization
 *                type: string
 *                example: 254743411403
 *              website:
 *                description: Website of the organization
 *                type: string
 *                example: localhost:3333
 *              description:
 *                description: description of the organization
 *                type: string
 *                example: Organization One
 *              logo:
 *                description: Logo of the organization
 *                type: string
 *                example: https://res.cloudinary.com/dihzljuvb/image/upload/v1662269776/qwerty/qwerty_hlfpqr.png
 *              address:
 *                description: Address of the organization
 *                type: object
 *                properties:
 *                  street:
 *                    description: Street address of the organization
 *                    type: string
 *                    example: Just
 *                  city:
 *                    description: City of the organization
 *                    type: string
 *                    example: Around
 *                  state:
 *                    description: State of the organization
 *                    type: string
 *                    example: Here
 *                  zipCode:
 *                    description: Zip code of the organization
 *                    type: string
 *                    example: 1234
 *                  country:
 *                    description: Country of the organization
 *                    type: string
 *                    example: Kenya
 *            required:
 *              - name
 *              - email
 *              - phone
 *    responses:
 *      '201':
 *        description: Created
 *      400:
 *        description: Bad request
 *      401:
 *        description: Unauthorized
 *      403:
 *        description: Forbidden
 *      5XX:
 *        description: Unexpected server error
 *
 * */
router.post("/organization", checkTenant, OrganizationController.create);
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
router.patch("/organization/:id", checkTenant, OrganizationController.update);
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
router.delete("/organization/:id", checkTenant, OrganizationController.delete);

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
router.get("/user", checkTenant, UserController.UserController.getAll);
/**
 * @openapi
 * '/api/user/{id}':
 *  get:
 *     tags:
 *     - Users
 *     summary: Retrieve a list of all Users in the database
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
router.get("/user/:id", checkTenant, UserController.UserController.getById);
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
router.patch("/user/:id", checkTenant, UserController.UserController.update);
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
router.delete("/user/:id", checkTenant, UserController.UserController.delete);
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
router.get(
  "/user/profile/:id",
  checkTenant,
  UserController.UserController.getProfile
);
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
router.get("/user/group", checkTenant, UserController.UserController.getGroups);
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
router.patch(
  "/user/group/:id",
  checkTenant,
  UserController.UserController.updateGroups
);
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
router.patch(
  "/user/profile/:id",
  checkTenant,
  UserController.UserController.updateProfile
);

export default router;
