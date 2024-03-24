import React from 'react'
import { useState } from 'react';

function Validate() {
    const [values,setValues]=useState({});
    function handleChange(e) {
      const name=e.target.name;
      const value=e.target.value;
      setValues(v=>({...v, [name]:value }));
    }
    function handleSubmit(e) {
      e.preventDefault();
      alert('Submitted values : '+Object.values(values).join(''));
    } 
  
    return (
      <form onSubmit={handleSubmit}>
        <label >
          Enter your first name:
          <input type="text"
          name='firstname'
          value={values.firstname || ""} 
          onChange={handleChange}/>
        </label>
        <br />
        <label>Enter your last name :
          <input 
            type="text" 
            name="lastname" 
            value={values.lastname || ""} 
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>Enter your budget :
          <input 
            type="number" 
            name="budget" 
            value={values.budget || ""} 
            onChange={handleChange}
          />
        </label>
        <br/>
        <input type="submit" />
      </form>
    )
}

export default Validate