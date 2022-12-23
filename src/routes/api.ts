import { Router } from "express";
import { Request, Response } from "express";
import AdminController from "../controllers/api/adminController";
import AuthController from "../controllers/api/authController";
const router = Router();

router.get("/auth/register", AuthController.AuthenticationController.register);
router.get("/auth/login", AuthController.AuthenticationController.login);
router.post("/auth/logout", AuthController.AuthenticationController.logout);
router.patch(
  "/auth/forgetPassword",
  AuthController.AuthenticationController.forgetPassword
);
router.delete(
  "/auth/refreshToken",
  AuthController.AuthenticationController.refreshToken
);
router.patch(
  "/auth/resetPassword",
  AuthController.AuthenticationController.resetPassword
);
router.post(
  "/auth/twoFactorAuth",
  AuthController.AuthenticationController.twoFactorAuth
);
router.post(
  "/auth/verifyAuthCode",
  AuthController.AuthenticationController.verifyAuthCode
);
router.post(
  "/auth/authenticate",
  AuthController.AuthenticationController.apiAuthentication
);

router.get("/audit_log", AdminController.AuditLog.getAll);
router.get("/audit_log/:id", AdminController.AuditLog.getById);
router.post("/audit_log", AdminController.AuditLog.create);
router.patch("/audit_log/:id", AdminController.AuditLog.update);
router.delete("/audit_log/:id", AdminController.AuditLog.delete);

router.get("/tenant", AdminController.Tenant.getAll);
router.get("/tenant/:id", AdminController.Tenant.getById);
router.post("/tenant", AdminController.Tenant.create);
router.patch("/tenant/:id", AdminController.Tenant.update);
router.delete("/tenant/:id", AdminController.Tenant.delete);

router.get("/organization", AdminController.Organization.getAll);
router.get("/organization/:id", AdminController.Organization.getById);
router.post("/organization", AdminController.Organization.create);
router.patch("/organization/:id", AdminController.Organization.update);
router.delete("/organization/:id", AdminController.Organization.delete);

router.get("auth/groups", AuthController.AuthGroupController.getAll);
router.get("/auth/groups/:id", AuthController.AuthGroupController.getById);
router.post("/auth/groups", AuthController.AuthGroupController.create);
router.patch("/auth/groups/:id", AuthController.AuthGroupController.update);
router.delete("/auth/groups/:id", AuthController.AuthGroupController.delete);

router.get("/auth/roles", AuthController.AuthRoleController.getAll);
router.get("/auth/groups/:id", AuthController.AuthRoleController.getById);
router.post("/auth/groups", AuthController.AuthRoleController.create);
router.patch("/auth/groups/:id", AuthController.AuthRoleController.update);
router.delete("/auth/groups/:id", AuthController.AuthRoleController.delete);

router.get("/auth/permissions", AuthController.AuthPermissionController.getAll);
router.get(
  "/auth/permissions/:id",
  AuthController.AuthPermissionController.getById
);
router.post(
  "/auth/permissions",
  AuthController.AuthPermissionController.create
);
router.patch(
  "/auth/permissions/:id",
  AuthController.AuthPermissionController.update
);
router.delete(
  "/auth/permissions/:id",
  AuthController.AuthRoleController.delete
);
export default router;
