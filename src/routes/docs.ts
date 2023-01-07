import { Router } from "express";
import config from "../providers/swagger";
const router = Router();
router.use(config.specs, config.serve);

router.get(config.specs, config.setup(config.specDoc, config.options));

export default router;
