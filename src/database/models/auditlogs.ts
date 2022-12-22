// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";

export interface AuditLogAddModel {
  id?: number;
  status: string;
  verified: string;
}
// interface for the AuditLog model
/**
 * AuditLog:
 * @remarks
 * This model represents a record of an auditable event in the system.
 * It includes fields such as id, event, entity, entityId, tenantId, userId, createdAt, and updatedAt.
 */
export interface AuditLogModel {
  id?: number;
  action: string;
  entityName: string;
  entityId: number;
  values: object;
  timestamp: Date;
}

export interface AuditLogViewModel {
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
    }
  }
  AuditLog.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
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
      entityName: {
        allowNull: false,
        type: DataTypes.STRING,
        comment: "comment",
      },
      entityId: {
        allowNull: false,
        type: DataTypes.STRING,
        comment: "comment",
      },
      timestamp: {
        allowNull: false,
        type: DataTypes.STRING,
        comment: "comment",
      },
    },
    { sequelize }
  );
  //
};
