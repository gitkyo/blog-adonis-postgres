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
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
// test hash password
// import Hash from '@ioc:Adonis/Core/Hash'

// test connexion à la base de données
// import Database from '@ioc:Adonis/Lucid/Database'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})
/*
old wihtout controllers
Route.get('login', async ({ view }) => {
  // tester connexion in database
  // const users = await Database.query().from('users')
  // console.log(users)
  return view.render('login')
})
*/
Route.get('login', 'LoginController.create')
/*
old without controllers
import LoginValidator from 'App/Validators/LoginValidator'
Route.post('/login', async ({ request, auth, response, session }) => {
  //usage du validator
  const { pseudo, password } = await request.validate(LoginValidator)

  // pas d'usage du validator
  // const pseudo = request.input('pseudo')
  // const password = request.input('password')

  //test hash password
  // const password = await Hash.make(request.input('password'))

  try {
    await auth.attempt(pseudo, password)
    console.log('Login success')
    response.redirect('/')
  } catch (error) {
    console.log('Login failed')
    session.flash('auth', 'Authentication impossible')
    response.redirect().back()
  }
})
*/
Route.post('login', 'LoginController.store')
