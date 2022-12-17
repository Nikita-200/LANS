import React, { useEffect, useState } from 'react'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Posts from '../../components/Posts/Posts'
import axios from "axios"
import './Home.css'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const [posts,setPosts] = useState([])
  const { search } = useLocation();

useEffect(() => {
  const fetchPosts = async () => {
    const res = await axios.get("/posts" + search);
    setPosts(res.data);
  };
  fetchPosts();
}, [search]);
  return (
    <div>
      <HeaderBar/>
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar/>
      </div>
      
      
   </div>
  )
}

export default Home