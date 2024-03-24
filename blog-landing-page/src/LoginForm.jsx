import React from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod' ;
import { z } from 'zod' ;
import MainContent from './MainContent';
import { useState } from 'react';
import SignUpForm from './SignUpForm';

const schema = z.object({ 
    email:z.string().email(),
    password:z.string().min(5),
 } )
function LoginForm(props) {
    const [submitted, setSubmitted] = useState(false);
    const { register , handleSubmit , formState :{ errors } } =useForm({ 
        resolver : zodResolver(schema),
     } );
     const onSubmit = (data)=>{
      if (props.data.users.find(u=>u.email == data.email&&u.password == data.password)){
        console.log(data);
        setSubmitted(true);
      }
      else   setSubmitted(false);
      } 
      if (submitted) {
        
        return <div>
          <Header title={props.data.title} links={props.data.links} lis={props.data.lis} isLogged="true" users={props.data.users}/>
          <MainContent posts={props.posts} color={props.color}/></div>;
      }


  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
        <label >Email:</label>
        <input type="email" { ...register('email') }  />
        { errors.email && <p>{ errors.email.message } </p> } 
        <br />
        <label >Password:</label>
        <input type="password" { ...register('password') }  />
        { errors.password && <p>{ errors.password.message } </p> } 
        <br />
        <button type='submit'> Submit</button>
        
    </form>
    <p>
    Don't have an account yet ?
    <button onClick={()=><SignUpForm posts={props.posts} color={props.color}/>}> Sign up</button>
  </p>
  </div>
  );
};

export default LoginForm