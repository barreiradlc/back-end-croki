'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Paleta = use('App/Models/Paleta')


/**
 * Resourceful controller for interacting with paletas
 */
class PaletaController {
  /**
   * Show a list of all paletas.
   * GET paletas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  
    const paletas = Paleta.query()
      // .with('images')
      // .nearBy(latitude, longitude, 10)
      .fetch()
    
    return paletas
  }

  /**
   * Render a form to be used for creating a new paleta.
   * GET paletas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new paleta.
   * POST paletas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const data = request.only([
      'title',
      'description',
      'cor1',
      'cor2',
      'cor3',
      'cor4',
      'cor5',
      'cor6',
      'cor7',
      'cor8'
    ])

    const paleta = Paleta.create( data )

    return paleta
  }

  /**
   * Display a single paleta.
   * GET paletas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing paleta.
   * GET paletas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update paleta details.
   * PUT or PATCH paletas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a paleta with id.
   * DELETE paletas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PaletaController
