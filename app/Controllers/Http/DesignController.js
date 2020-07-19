'use strict'

 const Design = use('App/Models/Design') 
 const axios = require('axios');


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with designs
 */
class DesignController {
  /**
   * Show a list of all designs.
   * GET designs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    let uri = 'http://spreadsheets.google.com/feeds/worksheets/1AJbjLg4o_ImhEiuuTfuWOiYpJuGFsyeF-TdCnjyDuaw/public/basic?alt=json'
    
    return axios.get(uri)
    .then((res) => {
      console.log(res)
      console.log('res')
      console.log(res.feed)
    })
    

  }

  /**
   * Render a form to be used for creating a new design.
   * GET designs/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new design.
   * POST designs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const data = request.only([
      'title',
      'description',
    ])

    const design = Design.create( data )

    return design

  }

  /**
   * Display a single design.
   * GET designs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing design.
   * GET designs/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update design details.
   * PUT or PATCH designs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a design with id.
   * DELETE designs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = DesignController
