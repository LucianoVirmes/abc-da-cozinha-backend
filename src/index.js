const { GraphQLServer } = require('graphql-yoga')
const connection = require('./database/connection');

connection.migrate.latest();

const resolvers = {
   
}

const typeDefs = ``;

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log("Server listening...")
})
