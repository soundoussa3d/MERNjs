import React from 'react'
import LoginForm from '../LoginForm'
import Header from '../Header'

function Login(props) {
  return (
    <div>
        <Header title={props.data.title} links={props.data.links} lis={props.data.lis} isLogged={props.data.isLogged} />
        <LoginForm data={props.data} />
    </div>
  )
}

export default Login