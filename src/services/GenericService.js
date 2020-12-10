class GenericService {
    
    constructor(repository){
        this._repository = repository;
    }

    save(entity) {
        return this._repository.save(entity);
    }

    delete(id) {
        this.beforeDelete(id);
        this._repository.delete(id);
    }

    findAll() {
        return this._repository.findAll();
    }
    
    findOne(id) {
        return this._repository.findOne(id);
    }

}

module.exports = GenericService;