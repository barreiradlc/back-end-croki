// 'use strict'

// class UserController {
// }

// module.exports = UserController


"use strict"

const Mail = use('Mail')
const User = use("App/Models/User")

class UserController {
  async create ({ request }) {
    const data = request.only(["username", "email", "password"])

    const user = await User.create(data)

    return user
  }
  
  async mail ({ request }) {
    let user = {
      email: 'barreira266@hotmail.com',
      username: 'barrerodlc'
    }

    console.debug(user)
    
    await Mail.send('emails.welcome', user, (message) => {
      message
      .to('barreira266@hotmail.com')
      .from('augustodasilva53@gmail.com')
      .subject('Welcome to yardstick')
    })
    
    console.debug(user)

    return {
      email: 'Registered successfully'
    }

  }
}

module.exports = UserController