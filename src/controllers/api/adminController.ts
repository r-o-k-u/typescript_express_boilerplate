import { Request, Response, NextFunction } from "express";
import Handler from "../../utils/Handler";
import {
  TenantService,
  OrganizationService,
  AuditLogService,
  ModulesService,
} from "../../services/adminService";

/**
 * Tenant Controller
 * @remarks
 * This class is responsible for managing tenants in the system.
 * It includes functions for creating new tenants, fetching tenants, and deleting tenants.
 */
// define the Tenant controller

export class TenantController {
  /**
   * This function retrieves a list of all tenants.
   * It uses the findAll function to retrieve all TenantService records from the database,
   * then sends the list of tenants as the response.
   * @param req
   * @param res
   */
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      // retrieve all tenants
      const tenants = await TenantService.getAll(req.params.database);
      if (tenants.length > 0) {
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
   * then uses the findByPk function to retrieve the TenantService record with the matching ID.
   * It then sends the tenant as the response.
   * @param req
   * @param res
   */
  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      // retrieve a single tenant by id
      let { id } = req.params;
      const tenant = await TenantService.getById(
        req.params.database,
        parseInt(id)
      );
      if (tenant) {
        Handler.responseHandler(
          res,
          200,
          "Success",
          tenant,
          "TenantService retrieved successfully"
        );
      } else {
        Handler.responseHandler(
          res,
          404,
          "Not found",
          null,
          "TenantService not found"
        );
      }
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function creates a new tenant.
   * It gets the name, description, and organization ID from the request body,
   * then uses the create function to insert a new TenantService record into the database with the provided values.
   * It then sends the new tenant as the response.
   * @param req
   * @param res
   */
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      // create a new tenant
      const tenant = await TenantService.create(req.params.database, req.body);
      Handler.responseHandler(
        res,
        200,
        "Success",
        tenant,
        "TenantService created successfully"
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
      let { id } = req.params;
      // update an existing tenant
      const tenant = await TenantService.update(
        req.params.database,
        parseInt(id),
        req.body
      );
      //tenant.update(req.body);
      Handler.responseHandler(
        res,
        200,
        "Success",
        tenant,
        "TenantService updated successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function deletes an existing tenant.
   * It gets the tenant ID from the request parameters,
   * then uses the destroy function to delete the TenantService record with the matching ID.
   * It then sends a response indicating that the tenant was deleted successfully.
   * @param req
   * @param res
   */
  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      let { id } = req.params;
      // delete an existing tenant
      const tenant = await TenantService.delete(
        req.params.database,
        parseInt(id)
      );
      //tenant.destroy();
      Handler.responseHandler(
        res,
        200,
        "Success",
        tenant,
        "TenantService deleted successfully"
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
// define the AuditLogService controller
export class AuditLogController {
  /**
   * This function retrieves a list of all audit logs.
   * It gets the tenant ID from the request object,
   * then uses the findAll function to retrieve the AuditLogService records with the matching tenant ID.
   * It then sends the list of audit logs as the response.
   * @param req
   * @param res
   */
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      // retrieve all audit logs
      const auditLogs = await AuditLogService.getAll(req.params.database);
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
   * then uses the findByPk function to retrieve the AuditLogService record with the matching ID.
   * It then sends the audit log as the response.
   * @param req
   * @param res
   */
  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      let { id } = req.params;
      // retrieve a single audit log by id
      const auditLog = await AuditLogService.getById(
        req.params.database,
        parseInt(id)
      );
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
   * then uses the create function to insert a new AuditLogService record
   * into the database with the current tenant ID, user ID, action, and entity.
   * It then sends the new audit log as the response.
   * @param req
   * @param res
   */
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      // create a new audit log
      const auditLog = await AuditLogService.create(
        req.params.database,
        req.body
      );
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
      let { id } = req.params;
      const auditLog = await AuditLogService.update(
        req.params.database,
        parseInt(id),
        req.body
      );
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
   * then uses the destroy function to delete the AuditLogService record with the matching ID.
   * It then sends a response indicating that the audit log was deleted successfully.
   * @param req
   * @param res
   */
  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      let { id } = req.params;
      // delete an existing audit log
      const auditLog = await AuditLogService.delete(
        req.params.database,
        parseInt(id)
      );
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
export class OrganizationController {
  /**
   * This function retrieves a list of all organizations.
   * It uses the findAll function to retrieve all OrganizationService records from the database,
   * then sends the list of organizations as the response.
   * @param req
   * @param res
   */
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      // retrieve all organizations
      const organizations = await OrganizationService.getAll(
        req.params.database
      );
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
   * then uses the findByPk function to retrieve the OrganizationService record with the matching ID.
   * It then sends the organization as the response
   * @param req
   * @param res
   */
  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      let { id } = req.params;
      // retrieve a single organization by id
      const organization = await OrganizationService.getById(
        req.params.database,
        parseInt(id)
      );
      if (organization) {
        Handler.responseHandler(
          res,
          200,
          "Success",
          organization,
          "OrganizationService retrieved successfully"
        );
      } else {
        Handler.responseHandler(
          res,
          404,
          "Not found",
          null,
          "OrganizationService not found"
        );
      }
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function creates a new organization.
   * It gets the name and description from the request body,
   * then uses the create function to insert a new OrganizationService record into the database.
   * It then sends the new organization as the response.
   * @param req
   * @param res
   */
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      // create a new organization
      const organization = await OrganizationService.create(
        req.params.database,
        req.body
      );
      Handler.responseHandler(
        res,
        200,
        "Success",
        organization,
        "OrganizationService created successfully"
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
      let { id } = req.params;
      // update an existing organization
      const organization = await OrganizationService.update(
        req.params.database,
        parseInt(id),
        req.body
      );
      Handler.responseHandler(
        res,
        200,
        "Success",
        organization,
        "OrganizationService updated successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
  /**
   * This function deletes an existing organization.
   * It gets the organization ID from the request parameters,
   * then uses the destroy function to delete the OrganizationService record with the matching ID.
   * It then sends a response indicating that the organization was deleted successfully
   * @param req
   * @param res
   */
  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      let { id } = req.params;
      // delete an existing organization
      const organization = await OrganizationService.delete(
        req.params.database,
        parseInt(id)
      );
      Handler.responseHandler(
        res,
        200,
        "Success",
        organization,
        "OrganizationService deleted successfully"
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
export class ModulesController {
  /**
   * This function retrieves a list of all modules for a tenant.
   * It gets the tenant ID from the request object,
   * then uses the findAll function to retrieve the EntityModule records with the matching tenant ID,
   * including the related Module records. It then sends the list of modules as the response.
   * @param req
   * @param res
   */
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      // get the tenant's modules
      const modules = await ModulesService.get(req.params.database);
      if (modules) {
        Handler.responseHandler(
          res,
          200,
          "Success",
          modules,
          "ModulesService retrieved successfully"
        );
      } else {
        Handler.responseHandler(
          res,
          404,
          "Not found",
          null,
          "ModulesService not found"
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
  static async getById(req: Request, res: Response, next: NextFunction) {
    try {
      // get a single module
      let { id } = req.params;
      const module = await ModulesService.getById(
        req.params.database,
        parseInt(id)
      );
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
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      // create a new module
      const module = await ModulesService.create(req.params.database, req.body);
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
  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      let { id } = req.params;
      // update an existing module
      const module = await ModulesService.update(
        req.params.database,
        parseInt(id),
        req.body
      );
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
      let { id } = req.params;
      const module = await ModulesService.delete(
        req.params.database,
        parseInt(id)
      );
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
      const modules = req.body;
      //await ModulesController.destroy({ where: { tenantId } });
      await ModulesService.updateTenantModules(req.params.database, modules);
      Handler.responseHandler(
        res,
        200,
        "Success",
        module,
        "Tenant Modules updated  successfully"
      );
    } catch (error: any) {
      Handler.errorHandler(error, req, res, next);
    }
  }
}
