import { Router } from "express";
import userController from "../controllers/user/user.controller";
const router = Router();

/**
 * @openapi
 * /api/user/create:
 *  post:
 *     tags:
 *     - User
 *     summary: Create a user
 *     requestBody:
 *      required: false
 *     responses:
 *      '200':
 *        description: User creation successful
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
router.post("/create", userController.create);
/**
 * @openapi
 * /api/User:
 *  get:
 *     tags:
 *     - User
 *     summary: Get a user
 *     requestBody:
 *      required: false
 *     responses:
 *      '200':
 *        description: User retrieved successful
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
router.get("/", userController.find);
/**
 * @openapi
 * /api/users/update:
 *  patch:
 *     tags:
 *     - User
 *     summary: Update a user
 *     requestBody:
 *      required: true
 *     responses:
 *      '200':
 *        description: User update successful
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
router.patch("/update", userController.update);
/**
 * @openapi
 * /api/user/delete:
 *  patch:
 *     tags:
 *     - User
 *     summary: Delete a user
 *     responses:
 *      '200':
 *        description: User deletion successful
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
router.patch("/delete", userController.delete);

/**
 * @openapi
 * /api/user/create/details:
 *  post:
 *     tags:
 *     - User Details
 *     summary: Create  user details
 *     requestBody:
 *      required: false
 *     responses:
 *      '200':
 *        description: User details added successfully
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
router.post("/create/details", userController.createDetails);
/**
 * @openapi
 * /api/User/details:
 *  get:
 *     tags:
 *     - User Details
 *     summary: Get user details
 *     requestBody:
 *      required: false
 *     responses:
 *      '200':
 *        description: User details retrieved successful
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
router.get("/details/", userController.findDetails);
/**
 * @openapi
 * /api/users/details/update:
 *  patch:
 *     tags:
 *     - User Details
 *     summary: Update  user details
 *     requestBody:
 *      required: true
 *     responses:
 *      '200':
 *        description: User details update successful
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
router.patch("/details/update", userController.updateDetails);
/**
 * @openapi
 * /api/user/details/delete:
 *  patch:
 *     tags:
 *     - User Details
 *     summary: Delete  user details
 *     responses:
 *      '200':
 *        description: User details deletion successful
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
router.patch("/details/delete", userController.deleteDetails);
export default router;
