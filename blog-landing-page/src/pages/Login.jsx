import React from 'react'
import LoginForm from '../LoginForm'
import Header from '../Header'
import { useContext } from "react";
import { ThemeContext } from "../themeSwitch/ThemeContext";

function Login(props) {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={theme}>
        <Header title={props.data.title} links={props.data.links} lis={props.data.lis} isLogged={props.data.isLogged} />
        <LoginForm data={props.data} />
    </div>
  )
}

export default Login