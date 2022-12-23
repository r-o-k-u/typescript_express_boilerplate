// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";
/**
 * TenantModule:
 *  @remarks
 * This model represents the modules that a tenant has access to.
 * It includes fields such as id, tenantId, moduleId, createdAt, and updatedAt.
 */
export interface ITenantModule {
  id: number; // ID for the tenant-module relationship (primary key)
  tenantId: number; // ID for the tenant (foreign key)
  createdBy: number; // ID for the user (foreign key)
  updatedBy: number; // ID for the user (foreign key)
  approvedBy: number; // ID for the user (foreign key)
  moduleId: number; // ID for the module (foreign key)
  startDate: Date; // Date when the tenant's access to the module starts
  endDate: Date; // Date when the tenant's access to the module ends
  status: string; // Status of the tenant's access to the module (e.g. "active", "inactive", "expired")
}

export interface ITenantModuleView {
  id?: number;
  status: string;
  name: string;
}

//export class TenantModule extends Model<TenantModuleModel, TenantModuleCreationAttributes> {}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  /**
   * TenantModule
   * @remarks
   * This class represents the TenantModule model,
   * which is used to define the modules that a tenant has access to. It includes fields such as id, tenantId, and moduleId.
   */
  class TenantModule extends Model<ITenantModule> implements ITenantModule {
    createdBy: number;
    updatedBy: number;
    approvedBy: number;
    userId: number;
    tenantId: number;
    moduleId: number;
    startDate: Date;
    endDate: Date;
    status: string;
    id: CreationOptional<number>;
    static associate(models: any) {}
  }
  TenantModule.init(
    {
      // ID for the tenant-module relationship (primary key)
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        comment: "ID for the tenant-module relationship (primary key) ",
      },
      // ID for the tenant (foreign key)
      tenantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "ID for the tenant (foreign key) ",
        /* references: {
          model: "tenants",
          key: "id",
        }, */
      },
      // ID for the module (foreign key)
      moduleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "ID for the module (foreign key) ",
        /* references: {
          model: "modules",
          key: "id",
        }, */
      },
      // Timestamp for when the tenant-module relationship was created
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "ID for  user that created (foreign key) ",
        /*  references: {
          model: "users",
          key: "id",
        }, */
      },
      // Timestamp for when the tenant-module relationship was created
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "ID for  user that updated  (foreign key) ",
        /*  references: {
          model: "users",
          key: "id",
        }, */
      },
      // Timestamp for when the tenant-module relationship was created
      approvedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "ID for  user that approved (foreign key) ",
        /*  references: {
          model: "users",
          key: "id",
        }, */
      },
      // Date when the tenant's access to the module starts
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: " Date when the tenant's access to the module starts",
      },
      // Date when the tenant's access to the module ends
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
        comment: "Date when the tenant's access to the module ends ",
      },
      // Status of the tenant's access to the module (e.g. "active", "inactive", "expired")
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment:
          "Status of the tenant's access to the module (e.g. 1.active, 0.inactive, 2.expired) ",
      },
    },
    { sequelize }
  );
  //
  return TenantModule;
};
