import React from 'react'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Posts from '../../components/Posts/Posts'
import './Home.css'

const Home = () => {
  return (
    <div>
      <HeaderBar/>
      <div className="home">
        <Posts/>
        <Sidebar/>
      </div>
     
     
   </div>
  )
}

export default Home