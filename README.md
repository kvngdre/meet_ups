# Meet Ups

Meet Ups is a holiday aware node API that allows users get a suitable meet up date and time.

## Getting Started

You are required to have installed [NodeJS](https://nodejs.org/en/download) on your machine.

### Database Setup

Ensure you have [PostgresSQL](https://www.postgresql.org/download/) installed for your machine and the PostgresSQL database server is running.
Create a new database using `Pg Admin` the desktop tool for managing PostgresSQL databases.

### App Setup

Clone the repo and install project dependencies:

```sh
npm install
```

Create a `.env` file in the root directory or you can use the `.env.example` file, it should contain these properties:

- PORT=

- API_KEY=
- API_URL=

- DATABASE_URL=

#### Docker

- Build docker

* `docker build -t app .`

- Run docker image

* `docker run -p 7000:7000 -it app`
