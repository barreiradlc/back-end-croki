'use strict'

const Env = use('Env')
const Model = use('Model')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Document extends Model {
    static get computed () {
        return ['url']
      }
    
      getUrl ({ path }) {
        return `${Env.get('APP_URL')}/documents/${path}`
      }
}

module.exports = Document