const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const SoundCloudAPI = require('./SoundCloudAPI');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            soundCloudAPI: new SoundCloudAPI()
        };
    }
 });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
