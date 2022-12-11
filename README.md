<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/r-o-k-u/typescript_express_boilerplate">
    <img src="https://res.cloudinary.com/dihzljuvb/image/upload/v1662269776/qwerty/qwerty_hlfpqr.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Typescript Express API Boilerplate  </h3>

  <p align="center">
    Qwerty systems typescript api boilerplate
    <br />
    <a href="https://github.com/r-o-k-u/typescript_express_boilerplate"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/r-o-k-u/typescript_express_boilerplate">View Demo</a>
    ·
    <a href="https://github.com/r-o-k-u/typescript_express_boilerplate/issues">Report Bug</a>
    ·
    <a href="https://github.com/r-o-k-u/typescript_express_boilerplate/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
  - [Architecture](#architecture)
  - [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

<!-- ABOUT THE PROJECT -->

## About The Project

### Built With

A boilerplate for [Node.js](https://nodejs.org/en) App.

- This boilerplate is built using [Express.js](https://expressjs.com/) web framework, and is using [Typescript Lang](https://www.typescriptlang.org/) for writing the app's logic.
- It uses Node's [Cluster API](https://nodejs.org/api/cluster.html), this helps us to take advantage of multi-core systems & to handle the load.
- For storing custom constant configurations within the `process.env` - [DotEnv](https://github.com/motdotla/dotenv) package is used.
- For Database - Repo contains the use of [Postgres](https://www.postgresql.org/) (ie. [Postgres](https://www.postgresql.org/) object modeling for [Node.js](https://nodejs.org/en/)).
- For Routing - Repo contains the use of [express-router](https://expressjs.com/en/guide/routing.html) & have distributed Routes into two files ie. Web Routes & API Routes.
- For Route Auth Middleware - Web routes are configured with [CSRF Token]() while the API routes are configured with [JSON Web Token](https://github.com/auth0/express-jwt).
- For Logging - Repo uses custom Log class built in middlewares folder, and it creates logs file by date & removes the log files after 'X' days (You can define that 'X' in the `.env` file).
- For Handling Exception - Repo contains two classes ie. `Handler` & `NativeEvent`.
- To Log - use `Log.info('Your message should go here!')`. Other options for logging are `Log.warn`, `Log.error` & `Log.custom`.
- For views - Repo contains the use of [ejs](https://ejs.co/) template engine.
- For background queues - Repo contains the use of [rabbitmq](https://www.rabbitmq.com/).

## Architecture

[![Clean Architecture Screen Shot][clean-architecture-screenshot]](https://qwerty.co.ke)

- **Entities**
- **Use cases**
- **Controllers / gateways**
- **DB**

## Features

- [ ] **Local Authentication** using Email and Password or Phone and password
- [ ] **2 step verification** using OTP on mail or phone
- [ ] **single sign on**
- [ ] **Account Management**
  - [ ] Profile Details
  - [ ] Change Password
  - [ ] Forgot Password
  - [ ] Reset Password
  - [ ] Link multiple OAuth strategies to one account
  - [ ] Delete Account
- [ ] **CSRF protection**
- [ ] **SMS queue service**
- [ ] **Node.js clusters support**
- [ ] **Email queue service**
- [x] **API Documentation** Swagger.

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

<!-- This is an example of how to list things you need to use the software and how to install them. -->

- [Node.js 14.0+](http://nodejs.org)
- [Docker ](https://docs.docker.com/get-docker/)

**Note:**

# Contents

- [Global Requisites](#global-requisites)
- [App Structure](#app-structure)
- [Install, Configure & Run](#install-configure--run)

# Global Requisites

- node (>= 14.0)
- tsc (>= 3.0.1)
- typescript (>= 3.0.1)
- postgres (>= 3.6.2)

# App Structure

```bash
├── bin
├── config
├── logs
├── nginx
├── public
├── src
│   ├── controllers
│   │   ├── api
│   │   │   ├── admin
│   │   │   │   ├── admin.controller.ts
│   │   ├── ├── authentication
│   │   │   │   ├── authentication.controller.ts
│   │   ├── ├── user
│   │   │   │   ├── user.controller.ts
│   │   ├── web
│   │   │   ├── index.ts
│   ├── database
│   │   ├── entity
│   │   ├── migrations
│   │   ├── seeders
│   │   ├── subscriber
│   │   └── index.ts
│   ├── middlewares
│   │   ├── CORS.ts
│   │   ├── CsrfToken.ts
│   │   ├── Http.ts
│   │   ├── Kernel.ts
│   │   ├── Log.ts
│   │   ├── Statics.ts
│   │   ├── StatusMonitor.ts
│   │   └── View.ts
│   ├── providers
│   │   ├── Express.ts
│   │   ├── Locals.ts
│   ├── routes
│   │   ├── api.ts
│   │   ├── docs.ts
│   │   ├── index.ts
│   │   └── web.ts
│   ├── services
│   │   └── auth
│   │        ├── Token.ts
│   │   ├── user
│   │        ├── user.ts
│   │        ├── userRepository.ts
│   ├── Utils
│   │   ├── Handler.ts
│   │   ├── jwt.ts
│   │   ├── Log.ts
│   │   └── Mailer.ts
│   │   └── Sms.ts
│   │   └── swagger.ts
├── views
│   ├── change_password.ejs
│   ├── error.ejs
│   ├── forgot_password.ejs
│   ├── home.ejs
│   ├── signin.ejs
│   ├── signup.ejs
│   └── verify_email.ejs
├── .app.ts
├── .env
├── .env.development
├── .env.example
├── .gitignore
├── .docker-compose.yaml
├── .Dockerfile
├── .env.production
├── nodemon.json
├── .ormconfig.ts
├── package.json
├── README.md
├── tsconfig.json
```

# Install, Configure & Run

Below mentioned are the steps to install, configure & run in your platform/distributions.

```bash
# Clone the repo.
git clone https://github.com/r-o-k-u/typescript_express_boilerplate.git;

# Goto the cloned project folder.
cd nodets;
```

```bash
# Without Docker

# Note: It is assumed here that you have MongoDB running in the background and that you have created the database.

# Install NPM dependencies.
npm install;

# Edit your DotEnv file using any editor of your choice.
# Please Note: You should add all the configurations details
# or else default values will be used!
vim .env;

# Run the app
npm run dev;
```

```bash
# With Docker

# Note: It is assumed here that you have Docker running in the background.

# Run the app in docker as a foreground process
docker-compose up

# Run the app in docker as a background process
docker-compose up -d
```

## Usage

<!-- Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources. -->

\_For more examples, please refer to the [Documentation](https://qwerty.co.ke)

- run migrations
  - npm run typeorm migration:run
- create a migration
  - npm run typeorm migration:generate -- -n migrationNameHere

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/r-o-k-u/typescript_express_boilerplate/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Project Link: [https://github.com/r-o-k-u/typescript_express_boilerplate](https://github.com/r-o-k-u/typescript_express_boilerplate)

<!-- ACKNOWLEDGEMENTS -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[issues-url]: https://github.com/r-o-k-u/typescript_express_boilerplate/issues
[clean-architecture-screenshot]: https://res.cloudinary.com/dihzljuvb/image/upload/v1662269845/qwerty/CleanArchitecture_xey0q6.jpg
