import { Request, Response, NextFunction } from "express";
import Handler from "../utils/Handler";
import Repo from "../database/models/index";
import bcrypt from "bcrypt";
import { hash } from "./authService";
/**
 * TenantService
 * @remarks
 * This class is responsible for managing tenants in the system.
 * It includes functions for creating new tenants, fetching tenants, and deleting tenants.
 */
// define the Tenant controller

export class TenantService {
  /**
   * This function retrieves a list of all tenants.
   * It uses the findAll function to retrieve all Tenant records from the database,
   * then sends the list of tenants as the response.
   */
  static async getAll(DB_NAME: string) {
    try {
      // retrieve all tenants
      const tenants = await Repo[DB_NAME].Tenant.findAll({
        include: { model: Repo[DB_NAME].TenantDetails, as: "details" },
      });
      if (tenants) {
        return tenants;
      } else {
        return null;
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function retrieves a single tenant by ID.
   * It gets the tenant ID from the request parameters,
   * then uses the findByPk function to retrieve the Tenant record with the matching ID.
   * It then sends the tenant as the response.
   */
  static async getById(DB_NAME: string, Id: number) {
    try {
      // retrieve a single tenant by id
      const tenant = await Repo[DB_NAME].Tenant.findByPk(Id, {
        include: { model: Repo[DB_NAME].TenantDetails, as: "details" },
      });
      if (tenant) {
        return tenant;
      } else {
        return null;
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function creates a new tenant.
   * It gets the name, description, and organization ID from the request body,
   * then uses the create function to insert a new Tenant record into the database with the provided values.
   * It then sends the new tenant as the response.
   
   */
  static async create(DB_NAME: string, Payload: any) {
    const t = await Repo.sequelize.transaction();
    try {
      const {
        name,
        email,
        organizationId,
        phoneNumber,
        website,
        logo,
        address,
        description,
        databaseName,
      } = Payload;
      const { street, city, state, zipCode, country } = address;
      // create a new tenant
      const Organization = await Repo[DB_NAME].Organization.findByPk(
        parseInt(organizationId)
      );
      if (!Organization) return null;
      let code = `TENANT_${Math.floor(
        10000 + Math.random() * 90000
      ).toString()}`;
      let databaseName_ = Organization.databaseName;
      let website_ = website || Organization.website; // if website is not provided use organizations website
      const password = await hash("change me");
      const tenant = await Repo[DB_NAME].Tenant.create(
        {
          name,
          email,
          password,
          domainName: website_,
          code,
          databaseName: databaseName_,
          organizationId: parseInt(Organization.id),
          status: 1, //active
        },
        {
          transaction: t,
        }
      );
      const tenant_details = await Repo[DB_NAME].TenantDetails.create(
        {
          tenantId: tenant.id,
          phone: phoneNumber,
          address: zipCode,
          city,
          country,
        },
        {
          transaction: t,
        }
      );
      // If the execution reaches this line, no errors were thrown.
      // We commit the transaction.
      await t.commit();
      return { tenant, tenant_details };
    } catch (error: any) {
      // If the execution reaches this line, an error was thrown.
      // We rollback the transaction.
      await t.rollback();
      throw Error(error);
    }
  }
  /**
   * This function updates an existing tenant.
   * It gets the tenant ID from the request parameters,
   * then gets the updated name, description, and organization ID from the request body.
   *  It uses the findByPk function to retrieve the existing tenant with the matching ID,
   *  then updates its name, description, and organization ID with the new values.
   *  It then saves the updated tenant to the database and sends a response indicating that the update was successful.
   
   */
  static async update(DB_NAME: string, Id: number, Update: any) {
    try {
      // update an existing tenant
      const tenant = await Repo[DB_NAME].Tenant.findByPk(Id);
      tenant.update(Update);
      return tenant;
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function deletes an existing tenant.
   * It gets the tenant ID from the request parameters,
   * then uses the destroy function to delete the Tenant record with the matching ID.
   * It then sends a response indicating that the tenant was deleted successfully.
   
   */
  static async delete(DB_NAME: string, Id: number) {
    try {
      // delete an existing tenant
      const tenant = await Repo[DB_NAME].Tenant.findByPk(Id);
      tenant.destroy();
      return tenant;
    } catch (error: any) {
      throw Error(error);
    }
  }
}
/**
 * AuditLog Service
 * @remarks
 * This class is responsible for managing audit logs in the system. It includes functions for creating new audit logs,
 * fetching audit logs for a particular tenant or organization, and deleting audit logs.
 */
// define the AuditLog controller
export class AuditLogService {
  /**
   * This function retrieves a list of all audit logs.
   * It gets the tenant ID from the request object,
   * then uses the findAll function to retrieve the AuditLog records with the matching tenant ID.
   * It then sends the list of audit logs as the response.
   
   */
  static async getAll(DB_NAME: string) {
    try {
      // retrieve all audit logs
      const auditLogs = {}; // await AuditLog.findAll();
      if (auditLogs) {
        return auditLogs;
      } else {
        return null;
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function retrieves a single audit log by ID.
   * It gets the audit log ID from the request parameters,
   * then uses the findByPk function to retrieve the AuditLog record with the matching ID.
   * It then sends the audit log as the response.
   
   */
  static async getById(DB_NAME: string, Id: number) {
    try {
      // retrieve a single audit log by id
      const auditLog = {}; // await AuditLog.findByPk(req.params.id);
      if (auditLog) {
        return auditLog;
      } else {
        return null;
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function creates a new audit log.
   * It gets the user ID, action, and entity from the request body,
   * then uses the create function to insert a new AuditLog record
   * into the database with the current tenant ID, user ID, action, and entity.
   * It then sends the new audit log as the response.
   
   */
  static async create(DB_NAME: string, Payload: any) {
    try {
      // create a new audit log
      const auditLog = {}; // await AuditLog.create(req.body);
      if (auditLog) {
        return auditLog;
      } else {
        return null;
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function updates an existing audit log.
   * It gets the audit log ID from the request parameters,
   * then gets the updated user ID, action, and entity from the request body.
   * It uses the findByPk function to retrieve the existing audit log with the matching ID,
   * then updates its user ID, action, and entity with the new values.
   * It then saves the updated audit log to the database and sends a response indicating that the update was successful.
   
   */
  static async update(DB_NAME: string, Id: number, Update: any) {
    try {
      // update an existing audit log
      const auditLog = {}; // await AuditLog.findByPk(req.params.id);
      //auditLog.update(req.body);
      if (auditLog) {
        return auditLog;
      } else {
        return null;
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function deletes an existing audit log.
   * It gets the audit log ID from the request parameters,
   * then uses the destroy function to delete the AuditLog record with the matching ID.
   * It then sends a response indicating that the audit log was deleted successfully.
   
   */
  static async delete(DB_NAME: string, Id: number) {
    try {
      // delete an existing audit log
      const auditLog = {}; // await AuditLog.findByPk(req.params.id);
      //auditLog.destroy();
      if (auditLog) {
        return auditLog;
      } else {
        return null;
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
}
/**
 * OrganizationService
 * @remarks
 * This class is responsible for managing organizations in the system.
 * It includes functions for creating new organizations, fetching organizations, and deleting organizations.
 */
// define the Organization controller
export class OrganizationService {
  /**
   * This function retrieves a list of all organizations.
   * It uses the findAll function to retrieve all Organization records from the database,
   * then sends the list of organizations as the response.
   
   */
  static async getAll(DB_NAME: string) {
    try {
      // retrieve all organizations
      const organizations = await Repo[DB_NAME].Organization.findAll();
      if (organizations) {
        return organizations;
      } else {
        return null;
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function retrieves a single organization by ID.
   * It gets the organization ID from the request parameters,
   * then uses the findByPk function to retrieve the Organization record with the matching ID.
   * It then sends the organization as the response
   
   */
  static async getById(DB_NAME: string, Id: number) {
    try {
      // retrieve a single organization by id
      const organization = await Repo[DB_NAME].Organization.findByPk(Id);
      if (organization) {
        return organization;
      } else {
        return null;
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function creates a new organization.
   * It gets the name and description from the request body,
   * then uses the create function to insert a new Organization record into the database.
   * It then sends the new organization as the response.
   
   */
  static async create(DB_NAME: string, Payload: any) {
    try {
      // create a new organization
      const {
        name,
        email,
        phoneNumber,
        website,
        logo,
        address,
        description,
        databaseName,
      } = Payload;
      const { street, city, state, zipCode, country } = address;
      let code = `ORG_${Math.floor(10000 + Math.random() * 90000).toString()}`;
      let databaseName_ = databaseName || code;
      const password = await hash("change me");
      const organization = await Repo[DB_NAME].Organization.create({
        name,
        email,
        phoneNumber,
        website,
        logo,
        city,
        code,
        description,
        password,
        databaseName: databaseName_,
        state,
        country,
        zipCode,
      });
      if (organization) {
        return organization;
      } else {
        return null;
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function updates an existing organization.
   * It gets the organization ID from the request parameters,
   * then gets the updated name and description from the request body.
   * It uses the findByPk function to retrieve the existing organization with the matching ID,
   * then updates its name and description with the new values.
   * It then saves the updated organization to the database and sends a response indicating that the update was successful.
   
   */
  static async update(DB_NAME: string, Id: number, Update: any) {
    try {
      // update an existing organization
      const organization = await Repo[DB_NAME].Organization.findByPk(Id);
      organization.update(Update);
      if (organization) {
        return organization;
      } else {
        return null;
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function deletes an existing organization.
   * It gets the organization ID from the request parameters,
   * then uses the destroy function to delete the Organization record with the matching ID.
   * It then sends a response indicating that the organization was deleted successfully
   
   */
  static async delete(DB_NAME: string, Id: number) {
    try {
      // delete an existing organization
      const organization = await Repo[DB_NAME].Organization.findByPk(Id);
      organization.destroy();
      if (organization) {
        return organization;
      } else {
        return null;
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
}
/**
 * ModulesService
 * @remarks
 * This class is responsible for managing the different modules that tenants or organizations have access to.
 * It includes functions for creating new modules, fetching modules for a particular tenant or organization,
 * and deleting modules.
 */
// define the Modules controller
export class ModulesService {
  /**
   * This function retrieves a list of all modules for a tenant.
   * It gets the tenant ID from the request object,
   * then uses the findAll function to retrieve the EntityModule records with the matching tenant ID,
   * including the related Module records. It then sends the list of modules as the response.
   
   */
  static async get(DB_NAME: string) {
    try {
      // get the tenant's modules
      /*  const tenantId = req.user!.tenantId; */
      const modules = {}; /* wait EntityModule.findAll({
        where: { tenantId },
        include: [{ model: Module }],
      }); */
      if (modules) {
        return modules;
      } else {
        return null;
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function retrieves a single module by ID.
   * It gets the module ID from the request parameters,
   * then uses the findByPk function to retrieve the Module record with the matching ID.
   * It then sends the module as the response.
   
   */
  static async getById(DB_NAME: string, Id: number) {
    try {
      // get a single module
      //const moduleId = req.params.id;
      const module = {}; //await Module.findByPk(moduleId);
      if (module) {
        return module;
      } else {
        return null;
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function creates a new module.
   * It gets the name and description from the request body,
   * then uses the create function to insert a new Module record into the database.
   * It then sends the new module as the response.
   
   */
  static async create(DB_NAME: string, Payload: any) {
    try {
      // create a new module
      ///const { name, description } = req.body;
      const module = {}; //await Module.create({ name, description });
      if (module) {
        return module;
      } else {
        return null;
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   * This function updates an existing module.
   * It gets the module ID from the request parameters,
   * then gets the updated name and description from the request body.
   * It uses the findByPk function to retrieve the existing module with the matching ID,
   * then updates its name and description with the new values.
   * It then saves the updated module to the database and sends a response indicating that the update was successful.
   
   */
  static async update(DB_NAME: string, Id: number, Update: any) {
    try {
      // update an existing module
      /* onst moduleId = req.params.id;
      const { name, description } = req.body; */
      const module = {}; //await Module.findByPk(moduleId);
      /* module.name = name; */
      /* module.description = description;
      /* await module.save(); */
      if (module) {
        return module;
      } else {
        return null;
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
  /**
   *  This function deletes an existing module.
   * It gets the module ID from the request parameters,
   * then uses the destroy function to delete the Module record with the matching ID.
   * It then sends a response indicating that the module was deleted successfully
   
   */
  static async delete(DB_NAME: string, Id: number) {
    try {
      // delete an existing module
      //const moduleId = req.params.id;
      const module = {}; //await Module.findByPk(moduleId);
      //await module.destroy();
      if (module) {
        return module;
      } else {
        return null;
      }
    } catch (error: any) {
      throw Error(error);
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
   
   */
  static async updateTenantModules(DB_NAME: string, Update: any) {
    try {
      // update the tenant's modules
      /* const tenantId = req.user!.tenantId;
      const moduleIds = req.body.moduleIds;
      await EntityModule.destroy({ where: { tenantId } }); */
      const modules = {}; //moduleIds.map((moduleId) => ({ tenantId, moduleId }));
      //await EntityModule.bulkCreate(modules);
      if (modules) {
        return modules;
      } else {
        return null;
      }
    } catch (error: any) {
      throw Error(error);
    }
  }
}
