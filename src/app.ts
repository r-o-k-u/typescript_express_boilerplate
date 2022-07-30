/**
 * Primary file for your Clustered API Server
 *
 */

import * as path from "path";
import * as dotenv from "dotenv";
import express from "express";

import Express from "./providers/Express";

import Log from "./utils/Log";
import Database from "./db/index";

class App {
  /**
   * Create the express object
   */
  public express: express.Application;

  /**
   * Initializes the express server
   */
  constructor() {
    this.express = Express.express;
    Express.init();
  }
  // Clear the console
  public clearConsole(): void {
    process.stdout.write("\x1B[2J\x1B[0f");
  }
  // Loads your dotenv file
  public loadConfiguration(): void {
    Log.info("Configuration :: Booting @ Master...");
    dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
  }

  // Loads your Server
  /* public loadServer(): void {
    Log.info("Server :: Booting @ Master...");

    Express.init();
  } */

  // Loads the Database Pool
  public loadDatabase(): void {
    Log.info("Database :: Booting @ Master...");
    Database.init();
  }
}

export default new App();
