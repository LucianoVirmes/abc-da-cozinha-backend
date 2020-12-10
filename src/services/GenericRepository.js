const knex = require('../database/connection');

class GenericRepository {

    constructor(tableName){
        this.tableName = tableName;
    }

    save(entity) {
        return knex(this.tableName).insert(entity).returning('*');
    }

    findOne(id) {
        return knex(this.tableName).where('id', id).select();
    } 

    findAll() {
        return knex(this.tableName).select();
    }

    delete(id) {
        knex(this.tableName).where('id', id).del();
    }

}

module.exports = GenericRepository;