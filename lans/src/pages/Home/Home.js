import React from 'react'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Posts from '../../components/Posts/Posts'

const Home = () => {
  return (
    <div>
      <HeaderBar/>
      <Posts/>
    <Sidebar/>
      
   </div>
  )
}

export default Home