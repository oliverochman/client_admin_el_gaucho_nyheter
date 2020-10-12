import React from 'react'
import auth from '../modules/auth'

const Login = (props) => {
  const login = async (event) => {
    event.preventDefault()
    try {
      const response = auth.signIn(
        event.target.children.email.value, 
        event.target.children.password.value
      )

      props.authenticate(response.data.status)
    } catch(error) {
      console.log(error.response.data)
    }
  }

  return (
    <form onSubmit={login}>
      <input placeholder="Email" id="email"/>
      <input placeholder="Password" id="password" type="password"/>
      <button>Login</button>
    </form>
  )
}

export default Login
