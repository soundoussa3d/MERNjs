import { useState,useEffect } from "react";

//import React from 'react'

//onClick={()=>updatePosts(post.id,updated)}
function MainContent(props) {
  const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPosts = async () => {
        try {
          let response = await fetch("http://127.0.0.1:8000/blogs");
          //console.log( response.json());
          let p = await response.json();
          //console.log(p);
          setPosts(p);
          //console.log(posts);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };
      useEffect(() => {
        fetchPosts();
      }, []);

  var len=posts.length;
  
  //pop up form 
  const [formData, setFormData] = useState({
    _id: null,
    title: "",
    content: ""
  });

  const [seen, setSeen] = useState(false);
  const [seen1, setSeen1] = useState(false);

  function togglePop(post) {
    setFormData({
      _id: post.id,
      title: post.title,
      content: post.content
    });
    setSeen(!seen);
  }
  function togglePop1() {
    setFormData({
      _id: posts.length+1,
      title: '',
      content: ''
    });
    setSeen1(!seen1);
  }
  function handleUpdate(e) {
    e.preventDefault();
    const { id, title, content } = formData;
    updatePosts(id, title, content);
    setSeen(false);
  }
  function handleAdd(e) {
    e.preventDefault();
    //console.log(formData)
    addPosts(formData);
    setSeen1(false);
  }
  //
  
  function addPosts(post) {
    //console.log(post)
  setPosts([
      ...posts , post
  ]);
    //console.log(posts);
     }
     function deletePost(id) {
      const posts_del=posts.filter(post=>post._id!==id)
      setPosts(posts_del);
      console.log(posts);
     }

     function updatePosts(id,title,content) {
      const modifiedPosts = posts.map(post => {
        if (post._id == id) {
            return { ...post, title: title , content: content };
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
            {post.content}
            </p>
            <button className="btn3" onClick={()=>togglePop(post)}>Update post</button>
            <button className="btn2" onClick={()=>deletePost(post._id)}>Delete post</button>
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
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      content: e.target.value
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
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      content: e.target.value
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
