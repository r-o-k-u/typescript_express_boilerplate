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
router.get("*", function (req, res) {
  return res.render("pages/404", {
    layout: "layout",
    title: "404",
    data: [],
  });
});
export default router;
