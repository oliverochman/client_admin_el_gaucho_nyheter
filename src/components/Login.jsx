import React from 'react'
import auth from '../modules/auth'

const Login = (props) => {
  const login = async (event) => {
    event.preventDefault()
    try {
      const response = await auth.signIn(
        event.target.children.email.value, 
        event.target.children.password.value
      )
      props.authenticate(response.success)
    } catch(error) {
      console.log(error.response.data)
    }
  }

  return (
    <form data-cy="login-form" onSubmit={login}>
      <input data-cy="email" placeholder="Email" id="email"/>
      <input data-cy="password" placeholder="Password" id="password" type="password"/>
      <button data-cy="submit">Login</button>
    </form>
  )
}

export default Login
