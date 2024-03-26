import React from 'react'
import SignUpForm from '../SignUpForm'
import Header from '../Header'
import { useContext } from "react";
import { ThemeContext } from "../themeSwitch/ThemeContext";

function Signup(props) {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={theme}>
        <Header title={props.title} links={props.links} lis={props.lis} isLogged={props.isLogged} users={props.users}/>
        <SignUpForm data={props} />
    </div>
  )
}

export default Signup