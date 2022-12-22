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
  moduleId: number; // ID for the module (foreign key)
  createdAt: Date; // Timestamp for when the tenant-module relationship was created
  updatedAt: Date; // Timestamp for when the tenant-module relationship was last updated
  startDate: Date; // Date when the tenant's access to the module starts
  endDate: Date; // Date when the tenant's access to the module ends
  status: string; // Status of the tenant's access to the module (e.g. "active", "inactive", "expired")
}

export interface ITenantModuleView {
  id?: number;
  status: string;
  name: string;
}

//export class EntityModule extends Model<EntityModuleModel, EntityModuleCreationAttributes> {}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  /**
   * TenantModule
   * @remarks
   * This class represents the TenantModule model,
   * which is used to define the modules that a tenant has access to. It includes fields such as id, tenantId, and moduleId.
   */
  class EntityModule extends Model<ITenantModule> implements ITenantModule {
    tenantId: number;
    moduleId: number;
    createdAt: Date;
    updatedAt: Date;
    startDate: Date;
    endDate: Date;
    status: string;
    id: CreationOptional<number>;
    static associate(models: any) {
      EntityModule.belongsTo(models.Tenant, { targetKey: "id" });
    }
  }
  EntityModule.init(
    {
      // ID for the tenant-module relationship (primary key)
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      // ID for the tenant (foreign key)
      tenantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "tenants",
          key: "id",
        },
      },
      // ID for the module (foreign key)
      moduleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "modules",
          key: "id",
        },
      },
      // Timestamp for when the tenant-module relationship was created
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      // Timestamp for when the tenant-module relationship was last updated
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      // Date when the tenant's access to the module starts
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      // Date when the tenant's access to the module ends
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      // Status of the tenant's access to the module (e.g. "active", "inactive", "expired")
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { sequelize }
  );
  //
};
