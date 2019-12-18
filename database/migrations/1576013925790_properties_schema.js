'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PropertiesSchema extends Schema {
  up () {
    this.table('properties', (table) => {
      // alter table
      
      table.integer('dimY').alter()
      table.integer('dimX').alter()
      table.string('modelo3d')

      table.text('descricao')

      table.integer('banheiros')
      table.integer('quartos')
      table.integer('andares')

      table.integer('modelo')
      table.integer('paleta')
      table.integer('mobiliario')

      table.integer('curtidas')

      table.string('address').alter()
      table.decimal('price').alter()
      table.decimal('cep').alter()
    })
  }

  down () {
    this.table('properties', (table) => {
      // reverse alternations
      table.decimal('dimX', 9, 6).notNullable()
      table.decimal('DimY', 9, 6).notNullable()

      table.string('address').notNullable()
      table.decimal('price').notNullable()
      table.decimal('cep').notNullable()
    })
  }
}

module.exports = PropertiesSchema
