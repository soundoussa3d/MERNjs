import React from 'react'
import Header from '../Header'
import MainContent from '../MainContent'

function Home(props) {
  return (
    <div>
        <Header title={props.title} links={props.links} lis={props.lis} isLogged={props.isLogged} users={props.users}/>
        <MainContent posts={props.posts} color={props.color}/>
    </div>
  )
}

export default Home