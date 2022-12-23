import Locals from "../providers/Locals";
import { Request, Response, NextFunction } from "express";
import Repo from "../database/models/index";

export default async (req: Request, res: Response, next: NextFunction) => {
  console.log("host", req.get("host"));
  console.log("req.originalUrl", req.originalUrl);
  console.log("req.protocol", req.protocol);
  console.log("DB", Locals.config().DB_NAME);
  //console.log("repo", Repo);

  const Organization = Repo[Locals.config().DB_NAME].Organization;
  console.log("Organization", Organization);
  if (!req.headers["x-tenant-id"]) {
    return res.status(400).json({
      message: "Entity ID is required",
    });
  }
  const tenant: any = Organization.findOne({
    where: { code: req.headers["x-tenant-id"] },
  });

  if (!tenant) {
    return res.status(404).json({
      message: "Tenant not found",
    });
  }
  console.log("Tenant", tenant);
  next();
};
