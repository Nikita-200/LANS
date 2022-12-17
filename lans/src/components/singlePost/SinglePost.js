import React, { useEffect, useState } from 'react'
import "./singlePost.css"
import Img from "./avatar.jpg";
import {BiEdit}  from "react-icons/bi"
import {RiDeleteBin6Line} from "react-icons/ri"
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function SinglePost() {
  const location = useLocation()
  const path=location.pathname.split("/")[2]
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
      {post.photo&&(<img
        src={post.photo} alt="avatar" className='singlePostImg'/>)}
        
        <h1 className='singlePostTitle'>Avatar : The Way of Water
        <div className='singlePostEdit'>
          <BiEdit className='singlePostIcon'  size="2rem"/>
          <RiDeleteBin6Line className='singlePostIcon' size="2rem"/>
        </div>
        
        </h1>

        <div className='singlePostInfo'>
            <span className='singlePostAuthor'>Author: <Link to={`/?user=${post.username}`}><b>{post.username}</b></Link></span>
            <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
        </div>

        <p className='singlePostDesc'>
       {post.desc}
        </p>
      </div>

    </div>
  )
}
