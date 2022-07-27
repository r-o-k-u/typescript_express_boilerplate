import express, { Express, Request, Response, Router } from "express";
const router = Router();

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

export default router;
