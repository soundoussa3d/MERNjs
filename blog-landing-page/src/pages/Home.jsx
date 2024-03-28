import React from 'react'
import Header from '../Header'
import MainContent from '../MainContent'
import { useContext } from "react";
import { ThemeContext } from "../themeSwitch/ThemeContext";
import Fetchdata from '../Fetchdata';
function Home(props) {
  const { theme } = useContext(ThemeContext);
  /*
  
    <Fetchdata/>
  */ 
  return (
    <div style={theme}>
        <Header title={props.title} links={props.links} lis={props.lis} isLogged={props.isLogged} users={props.users}/>
       <MainContent posts={props.posts} color={props.color}/>
    </div>
  )
}

export default Home