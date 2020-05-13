'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Template = use('App/Models/Template')
const Design = use('App/Models/Design')
const Paleta = use('App/Models/Paleta')

/**
 * Resourceful controller for interacting with templates
 */
class TemplateController {
  /**
   * Show a list of all templates.
   * GET templates
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, params}) {

    // const { latitude, longitude } = request.all()
  
    
    let busca  = request.get()
    

    const templates = Template.query()
      // .with('images')
      // .where('title', '=', busca)
      // .nearBy(latitude, longitude, 10)
      .fetch()

    
    return templates

  }

  /**
   * Render a form to be used for creating a new template.
   * GET templates/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new template.
   * POST templates
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ auth, request, response, params }) {

    // const { id } = auth.user
    const id = 1

    const data = request.only([
      'title',
      'description',
      'view',
      'banheiro',
      'quarto',
      'garagem',
      'design_id',
      'paleta_id',
    ])

    console.debug(data)

    const template = await Template.create( data )

    return template

  }

  /**
   * Display a single template.
   * GET templates/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {

    const template = await Template
      .query('id = ',params.id)
      .with('design')
      .with('paleta')
      .fetch()
    // console.debug(template)
    // const TemplateDesign = template.design().fetch()
    
    // console.debug(TemplateDesign)
    // await template.load('design')


    return template
  }

  /**
   * Render a form to update an existing template.
   * GET templates/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update template details.
   * PUT or PATCH templates/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a template with id.
   * DELETE templates/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = TemplateController
