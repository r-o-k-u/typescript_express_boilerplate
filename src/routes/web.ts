import { Router } from "express";
import homeController from "../controllers/web";
const router = Router();

router.get("/", homeController.home);
router.get("/home", homeController.dashboard);
router.get("/register", homeController.register);
router.post("/register", homeController.ConfirmRegister);
router.get("/login", homeController.login);
router.post("/authenticate", homeController.authenticate);
router.get("/lock-screen", homeController.lock);
router.get("/profile", homeController.profile);
router.get("/verify-email", homeController.verifyEmail);
router.get("/forgot-password", homeController.forgotPassword);
router.get("/change-password", homeController.changePassword);
router.get("/user-list", homeController.UserList);
router.get("/user-grid", homeController.UserGrid);
router.get("/auth-group", homeController.AuthGroups);
router.get("/auth-permission", homeController.AuthPermissions);
router.get("/organization", homeController.Organization);
router.get("/organization/:id", homeController.Organization);
router.get("/tenants", homeController.Tenants);
router.get("/tenant/:id", homeController.Tenants);
router.get("/modules", homeController.Modules);
router.get("/modules/:id", homeController.Modules);
router.get("*", function (req, res) {
  return res.render("pages/404", {
    layout: "layout",
    title: "404",
    data: [],
  });
});
export default router;
