// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";

export interface ModulesAddModel {
  id?: number;
  status: string;
  name: string;
}

export interface ModulesModel {
  id?: number;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface ModulesViewModel {
  id?: number;
  status: string;
  name: string;
}

//export class Modules extends Model<ModulesModel, ModulesCreationAttributes> {}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class Modules extends Model<ModulesModel> implements ModulesModel {
    name: string;
    status: string;
    verified: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    id: CreationOptional<number>;
    static associate(models: any) {
      Modules.belongsTo(models.Tenant, { targetKey: "id" });
    }
  }
  Modules.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      createdAt: "",
      updatedAt: "",
      status: "",
      name: "",
    },
    { sequelize }
  );
  //
};
