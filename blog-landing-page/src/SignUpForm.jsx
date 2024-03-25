import React from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod' ;
import { z } from 'zod' ;
import { useState } from 'react';
import LoginForm from './LoginForm';
import Login from './pages/Login';

const schema = z.object({ 
    email:z.string().email(),
    name:z.string(),
    password:z.string().min(5),
 } )
function SignUpForm(props) {
    const [users,setUsers]=useState([{ email:'soundous@gmail.com' , 
    name:'soundous',
    password: 'soundous'},
    { email:'soundous1@gmail.com' , 
    namme:'soundous1',
    password: 'soundous1'}]);
    const [submitted, setSubmitted] = useState(false);
    const { register , handleSubmit , formState :{ errors } } =useForm({ 
        resolver : zodResolver(schema),
     } );
     const onSubmit = (data)=>{
      console.log(submitted);
        if (!users.find(u=>u.email == data.email)) {
          setUsers([...users,data]);
          console.log(data);
          setSubmitted(true);
          console.log(...users);
        }
        else
        setSubmitted(false);
      } 
      if (submitted) {
        return <LoginForm data={props.data}  />;
      }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label >Email:</label>
        <input type="email" { ...register('email') }  />
        { errors.email && <p>{ errors.email.message } </p> } 
        <br />
        <label >Name:</label>
        <input type="text" { ...register('name') }  />
        { errors.name && <p>{ errors.name.message } </p> } 
        <br />
        <label >Password:</label>
        <input type="password" { ...register('password') }  />
        { errors.password && <p>{ errors.password.message } </p> } 
        <br />
        
        <button type='submit'> Submit</button>
    </form>
  );
};

export default SignUpForm