import { ApolloServer } from "apollo-server";
import path from 'node:path';
import { buildSchema } from "type-graphql";
import "reflect-metadata";
import { AppointmentsResolver } from "./resolvers/appointments-resolver";

async function bootstrap(){
      const schema = await buildSchema({
        resolvers: [
            AppointmentsResolver,
        ],
         emitSchemaFile: path.resolve(__dirname, 'schema.gql')
      })


     const server = new ApolloServer({
          schema,
     })

     const { url } = await server.listen()

     console.log(`server running on ${url}`)
}

bootstrap()
