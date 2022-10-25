# Survey App

A [Go](https://go.dev/) + [Vue.js](https://vuejs.org/) developer survey application 📋

## Getting Started

### Docker

This project relies on a MySql instance to store user and survey data. So that it is easy to get started, the MySql instance
has been dockerized and a set of scripts created for easily working with it.

That said, you will need to have docker installed on your machine. It can be found [here](https://docs.docker.com/get-docker/) 🦾

### Steps

For each of these sections, the assumption is that you are starting from the base of the repo!

**Start MySql**

```sh
# Run docker-compose to start MySql instance
docker-compose up
```

**Start the API**

For local development I am using [AIR](https://github.com/cosmtrek/air) for live reloading. Alternatevly you can always use the `go run .` command.

```sh
# Move into server directory
cd server

# Start the server in development with hot reloading 🔥
air
```

**Start the client**

[Vue](https://vuejs.org/) with [Vite](https://vitejs.dev/)⚡️ for frontend development and tooling.

```sh
# Move into the client directory
cd ..
cd client

# Install dependencies
npm install

# Start dev server
npm run dev

```
