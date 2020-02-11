'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DesignSchema extends Schema {
  up () {
    this.create('designs', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.string('description').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('designs')
  }
}

module.exports = DesignSchema
