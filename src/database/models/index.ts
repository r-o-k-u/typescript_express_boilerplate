"use strict";
import Database from "../index";
import Locals from "../../providers/Locals";

let Repo_: any = {};
Database.addSequelizeConnectionToRepo(Repo_, Locals.config().DB_NAME);

export default Repo_;
