/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'


Route.get('/', async () => {
  return { message: 'API do Corelab Challenge funcionando 🚀' }
})

Route.get('/todos', 'Http/ToDosController.index')
Route.post('/todos', 'Http/ToDosController.store')
Route.get('/todos/:id', 'Http/ToDosController.show')
Route.put('/todos/:id', 'Http/ToDosController.update')
Route.delete('/todos/:id', 'Http/ToDosController.destroy')
Route.patch('/todos/:id/favorite', 'Http/ToDosController.toggleFavorite')


Route.get('/vehicles', 'VehiclesController.index');
