import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Fetchdata() {
    const API_URL = '/blogs';
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPosts = async () => {
        try {
          let response = await fetch("http://127.0.0.1:8000/blogs");
          //console.log( response.json());
          let p = await response.json();
          console.log(p);
          setPosts(p);
          //console.log(p);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };
      useEffect(() => {
        fetchPosts();
      }, []);
  return (
    <div>
    {isLoading ? (
      <p>Loading posts...</p>
    ) : error ? (
      <p>Error: {error}</p>
    ) : (
      <ul>
        {posts.map((index,post) => (
          <li key={index}>
            <h2>{post.title}</h2>
          </li>
        ))}
      </ul>
    )}
  </div>
  )
}

export default Fetchdata