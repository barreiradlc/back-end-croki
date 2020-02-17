'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PropertyTemplatesIdSchema extends Schema {
  up () {
    this.table('properties', (table) => {
      // alter table
      table
        .integer('template_id')
        .unsigned()
        .references('id')
      .inTable('templates')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  down () {
    this.table('property_templates_ids', (table) => {
      // reverse alternations
    })
  }
}

module.exports = PropertyTemplatesIdSchema
