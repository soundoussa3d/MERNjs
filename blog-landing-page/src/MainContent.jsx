//import React from 'react'

function MainContent(props) {
  const length = props.posts.length;
  return (
    <div>
      
      {length>0 ? props.posts.map((post , index) =>{
        return (
          <div key={index} className="main">
            <h1 className="h1" style={{color:props.color}}>
            {post[0]}
            </h1>
            <p className="p">
            {post[1]}
            </p>
          </div>
        );
      }) : <div >No posts available</div>}
        
    </div>
  )
}

export default MainContent