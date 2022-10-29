import { Router } from "express";
import authRoute from "../api/routes/authentication";
import userRoute from "../api/routes/user";
import adminRoute from "../api/routes/admin";

const router = Router();

router.use("/auth", authRoute);
router.use("/user", userRoute);
router.use("/admin", adminRoute);
export default router;
