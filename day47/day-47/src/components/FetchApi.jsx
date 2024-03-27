import React, { useEffect, useState } from 'react';
import axios from 'axios';
function FetchApi() {
    const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';
    const [data , setData]=useState(null);
    const [isLoading, setIsLoading]= useState(true);
    const [error,setError]= useState(null);

    const fetchData = async () => {
        try {
          const response = await axios.get(API_URL); // Use Axios.get for GET requests
      
          if (!response.data) { // Check for successful response data
            throw new Error('API response data is empty');
          }
      
          setData(response.data);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false); // Always set loading to false after fetch completes
        }
      };
      useEffect(() => {
        fetchData();
      }, []);
  return (
    <div>
        {isLoading ? (
      <p>Loading data...</p>
    ) : error ? (
      <p>Error: {error}</p>
    ) : (
      <pre>{JSON.stringify(data, null, 2)}</pre> // Example: Display data in a formatted way
    )}
    </div>
  )
}

export default FetchApi