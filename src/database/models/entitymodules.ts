// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";

export interface EntityModuleAddModel {
  id?: number;
  status: string;
  name: string;
}

export interface EntityModuleModel {
  id?: number;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface EntityModuleViewModel {
  id?: number;
  status: string;
  name: string;
}

//export class EntityModule extends Model<EntityModuleModel, EntityModuleCreationAttributes> {}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class EntityModule
    extends Model<EntityModuleModel>
    implements EntityModuleModel
  {
    name: string;
    status: string;
    verified: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    id: CreationOptional<number>;
    static associate(models: any) {
      EntityModule.belongsTo(models.Tenant, { targetKey: "id" });
    }
  }
  EntityModule.init(
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
