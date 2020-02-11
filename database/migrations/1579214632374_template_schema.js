'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TemplateSchema extends Schema {
  up () {
    this.create('templates', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.string('description').notNullable()
      table.string('view').notNullable()
      table.integer('banheiro').notNullable()
      table.integer('quarto').notNullable()
      table.integer('garagem').notNullable()

      table.timestamps()

    })
  }

  down () {
    this.drop('templates')
  }
}

module.exports = TemplateSchema
