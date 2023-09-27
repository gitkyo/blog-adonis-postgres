import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LoginValidator from 'App/Validators/LoginValidator'

export default class LoginController {
  // Gestion de la vue pour l'utilisateur
  public async create({ view }: HttpContextContract) {
    return view.render('login')
  }

  // Gestion de l'authentification
  public async store({ request, auth, response, session }: HttpContextContract) {
    const { pseudo, password } = await request.validate(LoginValidator)

    try {
      await auth.use('web').attempt(pseudo, password)
      response.redirect('/articles')
    } catch (error) {
      session.flash('auth', 'Authentication impossible')
      response.redirect().back()
    }
  }
}
