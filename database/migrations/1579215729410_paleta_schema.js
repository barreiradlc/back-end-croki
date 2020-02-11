'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PaletaSchema extends Schema {
  up () {
    this.create('paletas', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.string('description').notNullable()
      table.string('cor1').notNullable()
      table.string('cor2').notNullable()
      table.string('cor3').notNullable()
      table.string('cor4').notNullable()
      table.string('cor5').notNullable()
      table.string('cor6').notNullable()
      table.string('cor7').notNullable()
      table.string('cor8').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('paletas')
  }
}

module.exports = PaletaSchema
