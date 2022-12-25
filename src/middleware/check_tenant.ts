import Locals from "../providers/Locals";
import { Request, Response, NextFunction } from "express";
import Repo from "../database/models/index";
import Handler from "../utils/Handler";

export default async (req: Request, res: Response, next: NextFunction) => {
  const Organization = Repo[Locals.config().DB_NAME].Organization;

  if (!req.get("host")) {
    return Handler.errorHandler(
      new Error("Host not found try again later"),
      req,
      res,
      next
    );
  } else {
  }
  const organization_: any = await Organization.findOne({
    where: { website: req.get("host") },
  });
  /* if (!organization_) {
    return Handler.responseHandler(
      res,
      404,
      "Not found",
      null,
      "Organization not found"
    );
  } */
  let tenantId = null;
  if (organization_) {
    const Tenant = Repo[organization_.databaseName].Tenant;
    const tenant_: any = await Tenant.findOne({
      where: { domainName: req.get("host") },
    });
    if (tenant_) tenantId = tenant_.id;
  }

  req.params.database = organization_
    ? organization_.databaseName
    : Locals.config().DB_NAME;
  req.body.tenantId = tenantId;
  next();
};
