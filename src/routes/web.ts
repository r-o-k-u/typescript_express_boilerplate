import { Router } from "express";
import homeController from "../api/controllers/home/homeContoller";
const router = Router();

router.get("/", homeController.home);
router.get("/register", homeController.register);
router.get("/login", homeController.login);
router.get("/verify-email", homeController.verifyEmail);
router.get("/forgot-password", homeController.forgotPassword);
router.get("/change-password", homeController.changePassword);

export default router;
