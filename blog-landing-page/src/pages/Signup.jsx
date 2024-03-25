import React from 'react'
import SignUpForm from '../SignUpForm'
import Header from '../Header'

function Signup(props) {
  return (
    <div>
        <Header title={props.title} links={props.links} lis={props.lis} isLogged={props.isLogged} users={props.users}/>
        <SignUpForm data={props} />
    </div>
  )
}

export default Signup