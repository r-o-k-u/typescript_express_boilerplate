"use strict";
const { getDBInstance } = require("../index");
import Locals from "../../providers/Locals";

let Repo_: any = {};
getDBInstance.addSequelizeConnectionToRepo(Repo_, Locals.config().DB_NAME);

export let Repo = Repo_;
