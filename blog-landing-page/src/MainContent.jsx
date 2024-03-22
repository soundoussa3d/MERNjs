import { useState } from "react";

//import React from 'react'

//onClick={()=>updatePosts(post.id,updated)}
function MainContent(props) {
  //pop up form 
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    description: ""
  });
  const [seen, setSeen] = useState(false);
  const [seen1, setSeen1] = useState(false);
  function togglePop(post) {
    setFormData({
      id: post.id,
      title: post.title,
      description: post.description
    });
    setSeen(!seen);
  }
  function togglePop1() {
    setFormData({
      id: posts.length+1,
      title: '',
      description: ''
    });
    setSeen1(!seen1);
  }
  function handleUpdate(e) {
    e.preventDefault();
    const { id, title, description } = formData;
    updatePosts(id, title, description);
    setSeen(false);
  }
  function handleAdd(e) {
    e.preventDefault();
    addPosts(formData);
    setSeen1(false);
  }
  //
  const [posts,setPosts] = useState(props.posts);
  var len=posts.length;
     function addPosts(post) {
      setPosts([
          ...posts , post
        ]);
     }
     function deletePost(id) {
      const posts_del=posts.filter(post=>post.id!==id)
      setPosts(posts_del);
      console.log(posts);
     }

     function updatePosts(id,title,description) {
      const modifiedPosts = posts.map(post => {
        if (post.id === id) {
            return { ...post, title: title , description: description };
        }
        return post;
      });
      setPosts(modifiedPosts);
      
    }

  return (
    <div>
      <button className="btn1" onClick={()=>togglePop1()}>Add post</button>

      {len>0 ? posts.map((post , index) =>{
        return (
          <div key={index} className="main">
            <h1 className="h1" style={{color:props.color}}>
            {post.title}
            </h1>
            <p className="p">
            {post.description}
            </p>
            <button onClick={()=>togglePop(post)}>Update post</button>
            <button className="btn1" onClick={()=>deletePost(post.id)}>Delete post</button>
          </div>
        );
      }) : <div >No posts available</div>}
        {seen && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Update post</h2>
            <form onSubmit={handleUpdate}>
              <label>
                Title:
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      title: e.target.value
                    })
                  }
                />
              </label>
              <label>
                Description:
                <input
                  type="text"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      description: e.target.value
                    })
                  }
                />
              </label>
              <button type="submit">Update</button>
            </form>
            <button onClick={() => setSeen(false)}>Close</button>
          </div>
        </div>
      )}
      {seen1 && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Add post</h2>
            <form onSubmit={handleAdd}>
              <label>
                Title:
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      title: e.target.value
                    })
                  }
                />
              </label>
              <label>
                Description:
                <input
                  type="text"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      description: e.target.value
                    })
                  }
                />
              </label>
              <button type="submit">Add</button>
            </form>
            <button onClick={() => setSeen1(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}



export default MainContent;
