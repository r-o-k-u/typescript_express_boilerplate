// @/models.ts
import { Sequelize, Model, CreationOptional } from "sequelize";

/**
 * Module
 *  @remarks
 * This model represents a module that is provided by the system.
 *  It includes fields such as id, name, description, createdAt, and updatedAt.
 */
export interface IModule {
  id: number; // ID for the module (primary key)
  name: string; // Name for the module
  description: string; // Description for the module
  category: string; // Category that the module belongs to
  icon: string; // URL for an icon representing the module
  version: string; // Version number for the module
  price: number; // Price for the module, in the base currency of the platform
  currency: string; // Currency code for the price of the module
  trialPeriod: number; // Length of the trial period for the module, in days
  trialPeriodUnit: string; // Unit of time for the trial period of the module (e.g. "days", "weeks", "months")
  documentationUrl: string; // URL for documentation for the module
  supportUrl: string; // URL for support for the module
  releaseNotesUrl: string; // URL for release notes for the module
}

export interface ModulesViewModel {
  id?: number;
  status: string;
  name: string;
}

//export class Modules extends Model<ModulesModel, ModulesCreationAttributes> {}

module.exports = (sequelize: Sequelize, DataTypes: any) => {
  /**
   * Module:
   *  @remarks
   * This class represents the Module model,
   * which is used to store information about the different modules available in the API.
   *  It includes fields such as id, name, and description.
   */
  class Modules extends Model<IModule> implements IModule {
    name: string;
    description: string;
    category: string;
    icon: string;
    version: string;
    price: number;
    currency: string;
    trialPeriod: number;
    trialPeriodUnit: string;
    documentationUrl: string;
    supportUrl: string;
    releaseNotesUrl: string;
    id: CreationOptional<number>;
    static associate(models: any) {
      Modules.belongsTo(models.Tenant, {
        foreignKey: "tenantId",
        as: "tenant",
      });
    }
  }
  Modules.init(
    {
      // ID for the module (primary key)
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      // Name for the module
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // Description for the module
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // Category that the module belongs to
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // URL for an icon representing the module
      icon: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      // Version number for the module
      version: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // Price for the module, in the base currency of the platform
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      // Currency code for the price of the module
      currency: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // Length of the trial period for the module, in days
      trialPeriod: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      // Unit of time for the trial period of the module (e.g. "days", "weeks", "months")
      trialPeriodUnit: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      // URL for documentation for the module
      documentationUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      // URL for documentation for the module
      supportUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      // URL for documentation for the module
      releaseNotesUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { sequelize }
  );
  //
};
