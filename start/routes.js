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

// cadastro
Route.post('/users', 'UserController.create')
// login
Route.post('/sessions', 'SessionController.create')

// projetos
Route.resource('properties', 'PropertyController')
  .apiOnly()
  .middleware('auth')
  
// imagens ADIÇÂO
Route.post('properties/:id/images', 'ImageController.store')
.middleware('auth')

// imagens RENDERIZAÇÂO
  Route.get('images/:path', 'ImageController.show')
