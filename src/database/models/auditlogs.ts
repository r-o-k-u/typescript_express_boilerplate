// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";

export interface AuditLogAddModel {
  id?: number;
  status: string;
  verified: string;
}
// interface for the AuditLog model
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
      AuditLog.belongsTo(models.Tenant, { targetKey: "id" });
      AuditLog.hasMany(models.AuditLogDetails);
    }
  }
  AuditLog.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      values: "",
      action: "",
      entityName: "",
      entityId: "",
      timestamp: "",
    },
    { sequelize }
  );
  //
};
