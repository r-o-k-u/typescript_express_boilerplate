// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";

// interface for the AuditLog model
/**
 * AuditLog:
 * @remarks
 * This model represents a record of an auditable event in the system.
 * It includes fields such as id, event, entity, entityId, tenantId, userId, createdAt, and updatedAt.
 */
interface AuditLogModel {
  id?: number;
  action: string;
  description: string;
  userId: number; // ID for the user that the log belongs to (foreign key)
  tenantId: number; // ID for the tenant that the user belongs to (foreign key)
  values: object;
  timestamp: Date;
}

interface AuditLogViewModel {
  id?: number;
  status: string;
  verified: string;
}

//export class AuditLog extends Model<AuditLogModel, AuditLogCreationAttributes> {}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  /**
   * AuditLog:
   *  @remarks
   * This class represents the AuditLog model, which is used to track changes made to the data within the API.
   * It includes fields such as id, description, entityName, and createdAt.
   */
  class AuditLog extends Model<AuditLogModel> implements AuditLogModel {
    description: string;
    userId: number;
    tenantId: number;
    action: string;
    entityName: string;
    entityId: number;
    values: object;
    timestamp: Date;
    status: string;
    verified: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    id: CreationOptional<number>;
    static associate(models: any) {
      AuditLog.belongsTo(models.Tenant, {
        foreignKey: "tenantId",
        as: "tenant",
      });
      AuditLog.belongsTo(models.User, { foreignKey: "userId", as: "user" });
    }
  }
  AuditLog.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      tenantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "ID for the tenant that the user belongs to (foreign key) ",
        /*  references: {
          model: "tenants",
          key: "id",
        }, */
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "ID for the tenant that the user belongs to (foreign key) ",
        /*  references: {
          model: "tenants",
          key: "id",
        }, */
      },
      values: {
        allowNull: false,
        type: DataTypes.STRING,
        comment: "comment",
      },
      action: {
        allowNull: false,
        type: DataTypes.STRING,
        comment: "comment",
      },
      timestamp: {
        allowNull: false,
        type: DataTypes.STRING,
        comment: "comment",
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
        comment: "comment",
      },
    },
    { sequelize }
  );
  //
  return AuditLog;
};
