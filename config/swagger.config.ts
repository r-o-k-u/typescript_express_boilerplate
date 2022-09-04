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
        email: "corneliusokaya@gmail.com",
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
  },
  apis: [
    path.join(__dirname, "..", `src`, `api`, `routes`, `*.ts`),
    path.join(__dirname, "..", `src`, `db`, `models`, `*.ts`),
  ],
};
