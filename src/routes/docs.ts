import { Router } from "express";
import config from "../utils/swagger";
const router = Router();
router.use(config.specs, config.serve);
router.get(config.specs, config.setup(config.specDoc, { explorer: true }));

export default router;
