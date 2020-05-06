// 'use strict'

// class SessionController {
// }

// module.exports = SessionController

const User = use('App/Models/User')

const { getInternalToken } = require('../../../routes/common/oauth');

'use strict'






class SessionController {
  async create({ request, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)


    const perfil = await User
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
  async forge({res}) {

    try {
      const token = await getInternalToken();
      return({
        access_token: token.access_token,
        expires_in: token.expires_in
      });
    } catch (err) {
      console.debug({err});
    }




  }
}

module.exports = SessionController