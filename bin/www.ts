/**
 * Bootstrap your App
 *
 */
import http from "http";
import "reflect-metadata";
import app from "../src/app";
const port = process.env.port;
/**
 * Run the Database pool
 */
//app.loadDatabase();
/**
 * Create HTTP server.
 */
const server = http.createServer(app.express);

/**
 * Event listener for HTTP server "error" event.
 *
 * @returns ERROR
 */
function onError(error: any) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.log(`${bind} requires elevated privileges`);
      // eslint-disable-next-line no-process-exit
      process.exit(1);
      // eslint-disable-next-line no-unreachable
      break;
    case "EADDRINUSE":
      console.log(`${bind} is already in use`);
      // eslint-disable-next-line no-process-exit
      process.exit(1);
      // eslint-disable-next-line no-unreachable
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  const addr: any = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `pipe ${addr.port}`;
  console.log(`Listening on ${bind} in ${app.express.get("env")} environment`);
  console.log(`Server ready at http://localhost:${addr.port}`);
  console.log(`Subscriptions ready at ws://localhost:${addr.port}`);
}

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
