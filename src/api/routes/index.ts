import express, { Express, Request, Response, Router } from "express";
import config from "../../utils/swagger";
import authentication from "../routes/authentication";
const router = Router();

router.use(config.specs, config.serve);
router.get(config.specs, config.setup(config.specDoc, { explorer: true }));

router.get("/", (req, res) => {
  return res
    .status(200)
    .json({
      resultMessage: {
        en: "Project is working successfully...",
        sw: "Mradi umezishwa na mafinikio...",
      },
      resultCode: "00004",
    })
    .end();
});

router.use("/auth", authentication);

export default router;
