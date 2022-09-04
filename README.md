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

- [`typescript`]()
- [`express`]()
- [`node js`]()

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

### Installation

1. Clone the repo

```sh
git clone https://github.com/r-o-k-u/typescript_express_boilerplate.git
```

2. Install NPM packages

```sh
npm install
```

<!-- USAGE EXAMPLES -->

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
