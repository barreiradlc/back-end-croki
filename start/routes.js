// 'use strict'

// /*
// |--------------------------------------------------------------------------
// | Routes
// |--------------------------------------------------------------------------
// |
// | Http routes are entry points to your web application. You can create
// | routes for different URLs and bind Controller actions to them.
// |
// | A complete guide on routing is available here.
// | http://adonisjs.com/docs/4.1/routing
// |
// */

// /** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
// const Route = use('Route')


'use strict'

const Route = use('Route')

// teste se está tudo ok
Route.get('/', () => {
  return { "Boas vindas": 'Estou vivo' }
})

Route.get('/jwt', 'SessionController.forge')

// cadastro
Route.get('/users/mail', 'UserController.mail')
Route.post('/users', 'UserController.create')
// login
Route.post('/sessions', 'SessionController.create')

// projetosB
Route.resource('properties', 'PropertyController')
  .apiOnly()
  .middleware('auth')
  
  
// projetos por usuário
Route.get('meusPRJ', 'PropertyController.meusPRJ')
  .middleware('auth')
  
// imagens ADIÇÂO
Route.post('properties/:id/images', 'ImageController.store')
.middleware('auth')

// imagens RENDERIZAÇÂO
  Route.get('images/:path', 'ImageController.show')

// modelo
Route.resource('templates', 'TemplateController')
  .apiOnly()
  // .middleware('auth')

// deisgn de interiores
Route.resource('designs', 'DesignController')
  .apiOnly()
  // .middleware('auth')

// paleta de cores
Route.resource('paletas', 'PaletaController')
  .apiOnly()
  // .middleware('auth')