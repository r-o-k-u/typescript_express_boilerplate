import { Request, Response, NextFunction } from "express";
import db from "../database/";
import { Organization } from "../database/entities/Organization";
export interface Tenant {
  user: number;
}
export default async (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers["x-tenant-id"]) {
    return res.status(400).json({
      message: "Entity ID is required",
    });
  }
  const tenant: Tenant = await db.database
    .getRepository(Organization)
    .findOne({ where: { code: req.headers["x-tenant-id"] } });

  if (!tenant) {
    return res.status(404).json({
      message: "Tenant not found",
    });
  }
  console.log("Tenant", tenant);
  next();
};
