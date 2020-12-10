const { GraphQLServer } = require('graphql-yoga');
const connection = require('./database/connection');
const RecipeService = require('./services/RecipeService');
const recipeService = new RecipeService();

connection.migrate.latest();

const resolvers = {
    Query: {
        status: () => 'Server listening!'
    },
    Mutation: {
        addRecipe: (root, params) => {
            return recipeService.save(params).then(res => {
                return res[0];
            })
        }

    }
}

const server = new GraphQLServer({
    typeDefs: 'src/graphql/schema.graphql',
    resolvers
})

server.start(() => {
    console.log("Server listening...");
})
