'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Paleta extends Model {

    template() {
        return this.belongsTo('App/Models/Template')
    }
}

module.exports = Paleta
