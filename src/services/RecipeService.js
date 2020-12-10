const GenericService = require('./GenericService');
const RecipeRepository = require('./RecipeRepository');
const repository = new RecipeRepository();

class RecipeService extends GenericService {
   constructor() {
       super();
       this._repository = repository;
   }
}

module.exports = RecipeService;