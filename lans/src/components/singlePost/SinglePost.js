import React, { useContext, useEffect, useState } from 'react'
import "./singlePost.css"
import Img from "./avatar.jpg";
import {BiEdit}  from "react-icons/bi"
import {RiDeleteBin6Line} from "react-icons/ri"
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Context} from '../../context/Context'
export default function SinglePost() {
  const location = useLocation()
  const path=location.pathname.split("/")[2]
  const { user } = useContext(Context);
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const PF = "http://localhost:8000/images/";
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);
  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (err) {}
  };

  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
      {post.photo&&(<img
        src={PF+post.photo} alt="avatar" className='singlePostImg'/>)}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ):(
        
        <h1 className='singlePostTitle'>{post.title}
        {post.username=== user.username &&(<div className='singlePostEdit'>
          <BiEdit className='singlePostIcon'  size="2rem" onClick={() => setUpdateMode(true)}/>
          <RiDeleteBin6Line className='singlePostIcon' size="2rem" onClick={handleDelete}/>
        </div>
        )}
        
        </h1>
        )}
        <div className='singlePostInfo'>
            <span className='singlePostAuthor'>Author: <Link to={`/?user=${post.username}`}><b>{post.username}</b></Link></span>
            <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
        </div>

        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={
              desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>

    </div>
  )
}
