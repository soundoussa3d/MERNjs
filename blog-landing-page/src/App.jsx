import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'
import './App.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

function App() {
  const [users,setUsers]=useState([{ email:'soundous@gmail.com' , 
  name:'soundous',
  password: 'soundous'},
  { email:'soundous1@gmail.com' , 
  namme:'soundous1',
  password: 'soundous1'}]);
  const links =['#home', '#about', '#services','#contact'];
  const lis =['Home', 'About', 'Services','Contact'];
  const title = "Blog App";
  const posts1 = 
    [
      {
        id:1,
        title:'title blog 1',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 111'
      },
      {
        id:2,
        title:'title blog 2',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 22'
      },
      {
        id:3,
        title:'title blog 3',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 33'
      },
      {
        id:4,
        title:'title blog 4',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 444'
      }
   ];

    //const posts2=[];
    const isLoggedIn = false;
    const color ="red";

  return (
    <>
     <Header title={title} links={links} lis={lis} isLogged={isLoggedIn} users={users}/>
           
     

     <Routes>
      <Route path="/" element={<MainContent posts={posts1} color={color}/>} />
      <Route path="/login" element={<LoginForm  users={users}/>} />
      <Route path="/signup" element={<SignUpForm  users={users}/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App