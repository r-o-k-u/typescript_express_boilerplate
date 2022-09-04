import { Router } from "express";
import adminController from "../controllers/admin/admin.controller";
const router = Router();

/**
 * @openapi
 * /api/admin/group/create:
 *  post:
 *     tags:
 *     - Admin Group
 *     summary: Create a admin group
 *     requestBody:
 *      required: false
 *     responses:
 *      '200':
 *        description: Admin group creation successful
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
router.post("/group/create", adminController.createAdminGroup);
/**
 * @openapi
 * /api/admin/group:
 *  get:
 *     tags:
 *     - Admin Group
 *     summary: Get  admin group
 *     requestBody:
 *      required: false
 *     responses:
 *      '200':
 *        description: Admin group retrieved successful
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
router.get("/group/", adminController.findAdminGroup);
/**
 * @openapi
 * /api/admin/group/update:
 *  patch:
 *     tags:
 *     - Admin Group
 *     summary: Update  admin group
 *     requestBody:
 *      required: true
 *     responses:
 *      '200':
 *        description: Admin group update successful
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
router.patch("/group/update", adminController.updateAdminGroup);
/**
 * @openapi
 * /api/admin/group/delete:
 *  patch:
 *     tags:
 *     - Admin Group
 *     summary: Delete a admin group
 *     responses:
 *      '200':
 *        description: Admin group deletion successful
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
router.patch("/group/delete", adminController.deleteAdminGroup);

/**
 * @openapi
 * /api/admin/role/create:
 *  post:
 *     tags:
 *     - Admin Role
 *     summary: Create admin role
 *     requestBody:
 *      required: false
 *     responses:
 *      '200':
 *        description: Admin role added successfully
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
router.post("/role/create/", adminController.createAdminRole);
/**
 * @openapi
 * /api/admin/role:
 *  get:
 *     tags:
 *     - Admin Role
 *     summary: Get admin details
 *     requestBody:
 *      required: false
 *     responses:
 *      '200':
 *        description: Admin details retrieved successful
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
router.get("/role/", adminController.findAdminRole);
/**
 * @openapi
 * /api/admin/role/update:
 *  patch:
 *     tags:
 *     - Admin Role
 *     summary: Update  admin role
 *     requestBody:
 *      required: true
 *     responses:
 *      '200':
 *        description: Admin role update successful
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
router.patch("/role/update", adminController.updateAdminRole);
/**
 * @openapi
 * /api/admin/role/delete:
 *  patch:
 *     tags:
 *     - Admin Role
 *     summary: Delete  admin role
 *     responses:
 *      '200':
 *        description: Admin role deletion successful
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
router.patch("/role/delete", adminController.deleteAdminRole);
export default router;
