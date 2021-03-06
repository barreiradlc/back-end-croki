'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Design extends Model {

    template() {
        return this.belongsToMany('App/Models/Template')
    }
}

module.exports = Design
