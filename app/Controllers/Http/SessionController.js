// 'use strict'

// class SessionController {
// }

// module.exports = SessionController

const User = use('App/Models/User')

'use strict'






class SessionController {
  async create ({ request, auth }) { 
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)


    const perfil =  await User
      .query()
      .where('email', '=', email)
      .fetch()

    const usuario = await {
      token,
      perfil
    }

    

    return usuario
    // return token
  }
}

module.exports = SessionController