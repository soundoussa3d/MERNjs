//import React from 'react'

import LoginForm from "./LoginForm";
import ThemeSwitcher from './themeSwitch/ThemeSwitcher';
function Header(props) {
  return (
    <div className="head">
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
            {props.links.map((link,index) =>{
                    return (<li className="nav-item active" key={index}> <a className="nav-link" href={link}>{props.lis[index]}</a> </li>)
            })}
            
            </ul>
            <span className="navbar-text">
            {props.isLogged ? <button type="button" className="btn btn-dark">Logout</button> :<button type="button" className="btn btn-dark" onClick={()=><LoginForm data={props} />}>Login</button> }
            <ThemeSwitcher/>
            </span>
        </div>
        </nav>
        
    </div>
  )
}

export default Header;