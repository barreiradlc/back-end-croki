'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterPropertiesSchema extends Schema {
  up () {
    this.table('templates', (table) => {
      // alter table
      table
        .integer('design_id')
        .unsigned()
        .references('id')
        .inTable('designs')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('paleta_id')
        .unsigned()
        .references('id')
        .inTable('paletas')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  down () {
    this.table('properties', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AlterPropertiesSchema
