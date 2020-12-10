const GenericRepository = require('./GenericRepository');

class RecipeRepository extends GenericRepository {
    constructor() {
        super('recipe');
    }
}

module.exports = RecipeRepository;