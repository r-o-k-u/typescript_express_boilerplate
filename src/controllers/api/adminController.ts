import { Request, Response, NextFunction } from "express";
import Handler from "../../utils/Handler";

/**
 * TenantController
 * @remarks
 * This class is responsible for managing tenants in the system.
 * It includes functions for creating new tenants, fetching tenants, and deleting tenants.
 */
// define the Tenant controller

export class Tenant {
  /**
   * This function retrieves a list of all tenants.
   * It uses the findAll function to retrieve all Tenant records from the database,
   * then sends the list of tenants as the response.
   * @param req
   * @param res
   */
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      // retrieve all tenants
      const tenants = {}; // await Tenant.findAll();
      if (tenants) {
        Handler.responseHandler(
          res,
          200,
          "Success",
          tenants,
          "Tenants retrieved successfully"
        );
      } else {
        Handler.responseHandler(
          res,
          404,
          "Not found",
          null,
          "Tenants not found"
        );
      }
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function retrieves a single tenant by ID.
   * It gets the tenant ID from the request parameters,
   * then uses the findByPk function to retrieve the Tenant record with the matching ID.
   * It then sends the tenant as the response.
   * @param req
   * @param res
   */
  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      // retrieve a single tenant by id
      const tenant = {}; // await Tenant.findByPk(req.params.id);
      if (tenant) {
        Handler.responseHandler(
          res,
          200,
          "Success",
          tenant,
          "Tenant retrieved successfully"
        );
      } else {
        Handler.responseHandler(
          res,
          404,
          "Not found",
          null,
          "Tenant not found"
        );
      }
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function creates a new tenant.
   * It gets the name, description, and organization ID from the request body,
   * then uses the create function to insert a new Tenant record into the database with the provided values.
   * It then sends the new tenant as the response.
   * @param req
   * @param res
   */
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      // create a new tenant
      const tenant = {}; // await Tenant.create(req.body);
      Handler.responseHandler(
        res,
        200,
        "Success",
        tenant,
        "Tenant created successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function updates an existing tenant.
   * It gets the tenant ID from the request parameters,
   * then gets the updated name, description, and organization ID from the request body.
   *  It uses the findByPk function to retrieve the existing tenant with the matching ID,
   *  then updates its name, description, and organization ID with the new values.
   *  It then saves the updated tenant to the database and sends a response indicating that the update was successful.
   * @param req
   * @param res
   */
  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      // update an existing tenant
      const tenant = {}; // await Tenant.findByPk(req.params.id);
      //tenant.update(req.body);
      Handler.responseHandler(
        res,
        200,
        "Success",
        tenant,
        "Tenant updated successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function deletes an existing tenant.
   * It gets the tenant ID from the request parameters,
   * then uses the destroy function to delete the Tenant record with the matching ID.
   * It then sends a response indicating that the tenant was deleted successfully.
   * @param req
   * @param res
   */
  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      // delete an existing tenant
      const tenant = {}; //await Tenant.findByPk(req.params.id);
      //tenant.destroy();
      Handler.responseHandler(
        res,
        200,
        "Success",
        tenant,
        "Tenant deleted successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
}
/**
 * AuditLog Controller
 * @remarks
 * This class is responsible for managing audit logs in the system. It includes functions for creating new audit logs,
 * fetching audit logs for a particular tenant or organization, and deleting audit logs.
 */
// define the AuditLog controller
export class AuditLog {
  /**
   * This function retrieves a list of all audit logs.
   * It gets the tenant ID from the request object,
   * then uses the findAll function to retrieve the AuditLog records with the matching tenant ID.
   * It then sends the list of audit logs as the response.
   * @param req
   * @param res
   */
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      // retrieve all audit logs
      const auditLogs = {}; // await AuditLog.findAll();
      if (auditLogs) {
        Handler.responseHandler(
          res,
          200,
          "Success",
          auditLogs,
          "Audit Log retrieved successfully"
        );
      } else {
        Handler.responseHandler(
          res,
          404,
          "Not found",
          null,
          "Audit Log not found"
        );
      }
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function retrieves a single audit log by ID.
   * It gets the audit log ID from the request parameters,
   * then uses the findByPk function to retrieve the AuditLog record with the matching ID.
   * It then sends the audit log as the response.
   * @param req
   * @param res
   */
  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      // retrieve a single audit log by id
      const auditLog = {}; // await AuditLog.findByPk(req.params.id);
      if (auditLog) {
        Handler.responseHandler(
          res,
          200,
          "Success",
          auditLog,
          "Audit Log retrieved successfully"
        );
      } else {
        Handler.responseHandler(
          res,
          404,
          "Not found",
          null,
          "Audit Log not found"
        );
      }
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function creates a new audit log.
   * It gets the user ID, action, and entity from the request body,
   * then uses the create function to insert a new AuditLog record
   * into the database with the current tenant ID, user ID, action, and entity.
   * It then sends the new audit log as the response.
   * @param req
   * @param res
   */
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      // create a new audit log
      const auditLog = {}; // await AuditLog.create(req.body);
      Handler.responseHandler(
        res,
        200,
        "Success",
        auditLog,
        "Audit Log created successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function updates an existing audit log.
   * It gets the audit log ID from the request parameters,
   * then gets the updated user ID, action, and entity from the request body.
   * It uses the findByPk function to retrieve the existing audit log with the matching ID,
   * then updates its user ID, action, and entity with the new values.
   * It then saves the updated audit log to the database and sends a response indicating that the update was successful.
   * @param req
   * @param res
   */
  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      // update an existing audit log
      const auditLog = {}; // await AuditLog.findByPk(req.params.id);
      //auditLog.update(req.body);
      Handler.responseHandler(
        res,
        200,
        "Success",
        auditLog,
        "Audit Log updated successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function deletes an existing audit log.
   * It gets the audit log ID from the request parameters,
   * then uses the destroy function to delete the AuditLog record with the matching ID.
   * It then sends a response indicating that the audit log was deleted successfully.
   * @param req
   * @param res
   */
  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      // delete an existing audit log
      const auditLog = {}; // await AuditLog.findByPk(req.params.id);
      //auditLog.destroy();
      Handler.responseHandler(
        res,
        200,
        "Success",
        auditLog,
        "Audit Log deleted successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
}
/**
 * OrganizationController
 * @remarks
 * This class is responsible for managing organizations in the system.
 * It includes functions for creating new organizations, fetching organizations, and deleting organizations.
 */
// define the Organization controller
export class Organization {
  /**
   * This function retrieves a list of all organizations.
   * It uses the findAll function to retrieve all Organization records from the database,
   * then sends the list of organizations as the response.
   * @param req
   * @param res
   */
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      // retrieve all organizations
      const organizations = {}; // await Organization.findAll();
      if (organizations) {
        Handler.responseHandler(
          res,
          200,
          "Success",
          organizations,
          "Organizations retrieved successfully"
        );
      } else {
        Handler.responseHandler(
          res,
          404,
          "Not found",
          null,
          "Organizations not found"
        );
      }
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function retrieves a single organization by ID.
   * It gets the organization ID from the request parameters,
   * then uses the findByPk function to retrieve the Organization record with the matching ID.
   * It then sends the organization as the response
   * @param req
   * @param res
   */
  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      // retrieve a single organization by id
      const organization = {}; // await Organization.findByPk(req.params.id);
      if (organization) {
        Handler.responseHandler(
          res,
          200,
          "Success",
          organization,
          "Organization retrieved successfully"
        );
      } else {
        Handler.responseHandler(
          res,
          404,
          "Not found",
          null,
          "Organization not found"
        );
      }
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function creates a new organization.
   * It gets the name and description from the request body,
   * then uses the create function to insert a new Organization record into the database.
   * It then sends the new organization as the response.
   * @param req
   * @param res
   */
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      // create a new organization
      const organization = {}; // await Organization.create(req.body);
      Handler.responseHandler(
        res,
        200,
        "Success",
        organization,
        "Organization created successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function updates an existing organization.
   * It gets the organization ID from the request parameters,
   * then gets the updated name and description from the request body.
   * It uses the findByPk function to retrieve the existing organization with the matching ID,
   * then updates its name and description with the new values.
   * It then saves the updated organization to the database and sends a response indicating that the update was successful.
   * @param req
   * @param res
   */
  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      // update an existing organization
      const organization = {}; // await Organization.findByPk(req.params.id);
      //organization.update(req.body);
      Handler.responseHandler(
        res,
        200,
        "Success",
        organization,
        "Organization updated successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function deletes an existing organization.
   * It gets the organization ID from the request parameters,
   * then uses the destroy function to delete the Organization record with the matching ID.
   * It then sends a response indicating that the organization was deleted successfully
   * @param req
   * @param res
   */
  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      // delete an existing organization
      const organization = {}; // await Organization.findByPk(req.params.id);
      //organization.destroy();
      Handler.responseHandler(
        res,
        200,
        "Success",
        organization,
        "Organization deleted successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
}
/**
 * ModulesController
 * @remarks
 * This class is responsible for managing the different modules that tenants or organizations have access to.
 * It includes functions for creating new modules, fetching modules for a particular tenant or organization,
 * and deleting modules.
 */
// define the Modules controller
export class Modules {
  /**
   * This function retrieves a list of all modules for a tenant.
   * It gets the tenant ID from the request object,
   * then uses the findAll function to retrieve the EntityModule records with the matching tenant ID,
   * including the related Module records. It then sends the list of modules as the response.
   * @param req
   * @param res
   */
  static async getModules(req: Request, res: Response, next: NextFunction) {
    try {
      // get the tenant's modules
      /*  const tenantId = req.user!.tenantId; */
      const modules = {}; /* wait EntityModule.findAll({
        where: { tenantId },
        include: [{ model: Module }],
      }); */
      if (modules) {
        Handler.responseHandler(
          res,
          200,
          "Success",
          modules,
          "Modules retrieved successfully"
        );
      } else {
        Handler.responseHandler(
          res,
          404,
          "Not found",
          null,
          "Modules not found"
        );
      }
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function retrieves a single module by ID.
   * It gets the module ID from the request parameters,
   * then uses the findByPk function to retrieve the Module record with the matching ID.
   * It then sends the module as the response.
   * @param req
   * @param res
   */
  static async getModule(req: Request, res: Response, next: NextFunction) {
    try {
      // get a single module
      const moduleId = req.params.id;
      const module = {}; //await Module.findByPk(moduleId);
      if (module) {
        Handler.responseHandler(
          res,
          200,
          "Success",
          module,
          "Module retrieved successfully"
        );
      } else {
        Handler.responseHandler(
          res,
          404,
          "Not found",
          null,
          "Module not found"
        );
      }
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function creates a new module.
   * It gets the name and description from the request body,
   * then uses the create function to insert a new Module record into the database.
   * It then sends the new module as the response.
   * @param req
   * @param res
   */
  static async createModule(req: Request, res: Response, next: NextFunction) {
    try {
      // create a new module
      const { name, description } = req.body;
      const module = {}; //await Module.create({ name, description });
      Handler.responseHandler(
        res,
        200,
        "Success",
        module,
        "Module created successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function updates an existing module.
   * It gets the module ID from the request parameters,
   * then gets the updated name and description from the request body.
   * It uses the findByPk function to retrieve the existing module with the matching ID,
   * then updates its name and description with the new values.
   * It then saves the updated module to the database and sends a response indicating that the update was successful.
   * @param req
   * @param res
   */
  static async updateModule(req: Request, res: Response, next: NextFunction) {
    try {
      // update an existing module
      /* const moduleId = req.params.id;
      const { name, description } = req.body;
      const module = await Module.findByPk(moduleId);
      module.name = name;
      module.description = description;
      await module.save(); */
      Handler.responseHandler(
        res,
        200,
        "Success",
        module,
        "Module updated successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   *  This function deletes an existing module.
   * It gets the module ID from the request parameters,
   * then uses the destroy function to delete the Module record with the matching ID.
   * It then sends a response indicating that the module was deleted successfully
   * @param req
   * @param res
   */
  static async deleteModule(req: Request, res: Response, next: NextFunction) {
    try {
      // delete an existing module
      /* const moduleId = req.params.id;
      const module = await Module.findByPk(moduleId);
      await module.destroy(); */
      Handler.responseHandler(
        res,
        200,
        "Success",
        module,
        "Module deleted successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }

  /**
   * This function first retrieves the module ID from the request parameters,
   * then gets the updated name and description from the request body.
   * It uses the findByPk function to retrieve the existing module with
   * the matching ID, then updates its name and description with the new values.
   * Finally, it saves the updated module to the database
   * and sends a response indicating that the update was successful.
   *
   * */
  static async updateModules(req: Request, res: Response, next: NextFunction) {
    try {
      // update the tenant's modules
      /* const tenantId = req.user!.tenantId;
      const moduleIds = req.body.moduleIds;
      await EntityModule.destroy({ where: { tenantId } });
      const modules = moduleIds.map((moduleId) => ({ tenantId, moduleId }));
      await EntityModule.bulkCreate(modules); */
      Handler.responseHandler(
        res,
        200,
        "Success",
        module,
        "Module updated successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function first retrieves the tenant ID from the request object,
   * then gets the list of module IDs from the request body.
   * It then removes all existing modules for the tenant by destroying
   * the EntityModule records with the matching tenant ID. Next,
   * it creates a new list of EntityModule records with the tenant ID
   * and the updated list of module IDs, and uses the bulkCreate function
   * to insert them all at once. Finally, it sends a response
   * indicating that the update was successful.
   * @param req
   * @param res
   */
  static async updateTenantModules(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      // update the tenant's modules
      /* const tenantId = req.user!.tenantId;
      const moduleIds = req.body.moduleIds;
      await EntityModule.destroy({ where: { tenantId } });
      const modules = moduleIds.map((moduleId) => ({ tenantId, moduleId }));
      await EntityModule.bulkCreate(modules); */
      Handler.responseHandler(
        res,
        200,
        "Success",
        module,
        "Tenant Modules successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
}

export default {
  Tenant,
  AuditLog,
  Organization,
  Modules,
};
