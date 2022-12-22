import { Router } from "express";
import { Request, Response } from "express";
import AdminController from "../controllers/api/adminController";
const router = Router();

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

export default router;
