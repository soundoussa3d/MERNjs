import React from 'react'
import Header from '../Header'
import MainContent from '../MainContent'
import { useContext } from "react";
import { ThemeContext } from "../themeSwitch/ThemeContext";
function Home(props) {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={theme}>
        <Header title={props.title} links={props.links} lis={props.lis} isLogged={props.isLogged} users={props.users}/>
        <MainContent posts={props.posts} color={props.color}/>
    </div>
  )
}

export default Home