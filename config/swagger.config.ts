import path from "path";
export default {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Typescript Boilerplate Api",
      version: "1.0.0",
      description:
        "The API documentation of a boilerplate/starter project for quickly building RESTful APIs using Node.js, Express, and postgress.",
      license: {
        name: "MIT",
        url: "https://choosealicense.com/licenses/mit/",
      },
      contact: {
        name: "Cornelius Okaya",
        url: "https://github.com/r-o-k-u",
        email: "okaya@qwerty.co.ke",
      },
    },
    components: {
      securitySchemas: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    servers: [
      {
        url: "http://localhost:{port}",
        description: "Development server",
        variables: {
          port: {
            enum: ["3333", "443"],
            default: "3333",
          },
        },
      },
      {
        url: "https://api.qwerty.co.ke",
        description: "Production server",
        variables: {
          basePath: {
            default: "v2",
          },
        },
      },
    ],
    tags: [
      {
        name: "Authentication",
        description: "API for authentication and authorization in the system",
      },
      {
        name: "Administration",
        description: "API for all system administration functions",
      },
      {
        name: "Users",
        description: "API for users in the system",
      },
    ],
  },

  apis: [
    path.join(__dirname, "..", `src`, `routes`, `api.ts`),
    path.join(__dirname, "..", `src`, `db`, `models`, `*.ts`),
  ],
};
