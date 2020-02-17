'use strict'

const Database = use('Database')


/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Template extends Model {

  property() {
    return this.belongsTo('App/Models/Property')
  }

  images() {
    return this.hasMany('App/Models/Image')
  }
  
  design () {
    return this.belongsTo('App/Models/Design')
  }

  paleta () {
    return this.belongsTo('App/Models/Paleta')
  }

}

module.exports = Template
