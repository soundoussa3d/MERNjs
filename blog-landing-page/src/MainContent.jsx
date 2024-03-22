import { useState } from "react";

//import React from 'react'

function MainContent(props) {
  const [posts,setPosts] = useState(props.posts);
  var len=posts.length;
  const post1 = {
    id:5,
    title:'title blog 7',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 777' 
  };
     function addPosts(post) {
      setPosts([
          ...posts , post
        ]);
      console.log(posts);
     }
     function deletePost(id) {
      const posts_del=posts.filter(post=>post.id!==id)
      setPosts(posts_del);
      console.log(posts);
     }
     const updated = { 
      title:'title blog 1 hello',
      description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 111 hello' 
    }
     function updatePosts(id,post_updated) {
      const post_found=posts.find(post=>post.id==id);
    
      setPosts({
        ...post , 
        
      });
      
    }

  return (
    <div>
      <button className="btn1" onClick={()=>addPosts(post1)}>Add post</button>

      {len>0 ? posts.map((post , index) =>{
        return (
          <div key={index} className="main">
            <h1 className="h1" style={{color:props.color}}>
            {post.title}
            </h1>
            <p className="p">
            {post.description}
            </p>
            <button className="btn1" onClick={()=>updatePosts(post.id)}>Update post</button>
            <button className="btn1" onClick={()=>deletePost(post.id,updated)}>Delete post</button>
          </div>
        );
      }) : <div >No posts available</div>}
        
    </div>
  )
}



export default MainContent;
