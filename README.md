# Node.Js and GraphQL

    This aplication was created using typescript, mode.Js, graphql-yoga, docker and postgres

## How to run

### Inicialize the project

      npm i

### Database

#### With docker installed

    sudo docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

#### Run the migrations

    npm run typeorm migration:run

### Start the project

    npm start

### Access the interface to use

    http://localhost:4000/

### Schemas

    All the schemas and documentations can be easily found in the tabs SCHEMA and DOCS on the right side of the application screen

### Developed By

    Lucas Gomes
    lgomes@post.com
