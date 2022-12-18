// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";

export interface AuditLogAddModel {
  id?: number;
  status: string;
  verified: string;
}

export interface AuditLogModel {
  id?: number;
  status: string;
  verified: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuditLogViewModel {
  id?: number;
  status: string;
  verified: string;
}

//export class AuditLog extends Model<AuditLogModel, AuditLogCreationAttributes> {}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class AuditLog extends Model<AuditLogModel> implements AuditLogModel {
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
      createdAt: "",
      updatedAt: "",
      status: "",
      verified: "",
    },
    { sequelize }
  );
  //
};
