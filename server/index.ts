import "reflect-metadata";

import { ApolloServer } from 'apollo-server-express';
import { CollectionsResolver } from './modules/collection/resolver';
import { GenreResolver } from './modules/genre/resolver';
import { buildSchema } from 'type-graphql';
import express from 'express';
import { graphqlRouter } from "./routes";
import { serverPort } from "./env";

const port = serverPort || 4000;

async function bootstrap() {

  const schema = await buildSchema({
    resolvers: [
      CollectionsResolver,
      GenreResolver
    ]
  });

  const server = new ApolloServer({
    schema,
    playground: true
  });

  const app = express();
  app.use(graphqlRouter);

  server.applyMiddleware({ app });

  app.listen(port, () => {
    console.log(
      `Server is running, GraphQL Playground available at http://localhost:${port}/playground`
    );
  });
}

bootstrap();