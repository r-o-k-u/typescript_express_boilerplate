import http from "http";
import app from "../src/app";
import port from "../config/index";
/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Event listener for HTTP server "error" event.
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
  console.log(`Listening on ${bind} in ${app.get("env")} environment`);
  console.log(`Server ready at http://localhost:${addr.port}`);
  console.log(`Subscriptions ready at ws://localhost:${addr.port}`);
}

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
