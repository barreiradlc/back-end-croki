'use strict'

const Property = use('App/Models/Property')


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with properties
 */
class PropertyController {
  /**
   * Show a list of all properties.
   * GET properties
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  // async index ({ request, response, view }) {
  // }
  // async index() {
  //   // lista todos
  //   const properties = Property.all()
  
  //   return properties
  // }
  
  async index ({ request }) {
    //   // lista todos baseado na distancia
    const { latitude, longitude } = request.all()
  
    const properties = Property.query()
    .with('images')
    .nearBy(latitude, longitude, 10)
    .fetch()
    
    return properties
  }
  
  async meusPRJ ({ auth, request }) {
    //   // lista todos baseado na autenticação
    const { id } = auth.user

    const properties = await Property
      .query()
      .where('user_id', '=', id)
      .fetch()
    return properties
  }

  /**
   * Render a form to be used for creating a new property.
   * GET properties/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */


  /**
   * Create/save a new property.
   * POST properties
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ auth, request, response }) {
    const { id } = auth.user
    const data = request.only([
      'title',
      'address',
      'latitude',
      'longitude',
      'price',
      'cep',
      'dimX',
      'dimY'
    ])
  
    const property = await Property.create({ ...data, user_id: id })
  
    return property
  }

  /**
   * Display a single property.
   * GET properties/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params }) {
    // busca por id incluso nos parâmetros de url
    
    const property = await Property.findOrFail(params.id)
    // busca por imagens associadas a ele
    await property.load('images')

    return property
  }

  /**
   * Render a form to update an existing property.
   * GET properties/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */


  /**
   * Update property details.
   * PUT or PATCH properties/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const property = await Property.findOrFail(params.id)
  
    const data = request.only([
      'title',
      'address',  
      'latitude',
      'longitude',
      'price',
      'cep',
      'dimY',
      'dimX'
    ])
  
    property.merge(data)
  
    await property.save()
  
    return property
  }

  /**
   * Delete a property with id.
   * DELETE properties/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, auth, response }) {
    // busca por registros pr url
    const property = await Property.findOrFail(params.id)

    // veriica permissões
    if (property.user_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized' })
    }
    // remove registro
    await property.delete()
  }
}

module.exports = PropertyController
