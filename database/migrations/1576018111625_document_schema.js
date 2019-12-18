'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DocumentSchema extends Schema {
  up () {
    this.create('documents', (table) => {
      table.increments()
      table
        .integer('property_id')
        .unsigned()
        .references('id')
        .inTable('properties')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('title')
      table.string('path').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('documents')
  }
}

module.exports = DocumentSchema
