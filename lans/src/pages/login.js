import { Link } from "react-router-dom";
import React, { useContext, useRef } from "react";

import  { Context } from "../../context/Context";

function Login() {
  const userRef= useRef();
  const passwordRef=useRef();
  const { dispatch, isFetching }=useContext(Context)

  const handleSubmit=async(e)=>{
e.preventDefault();
dispatch({type:"LOGIN_START"});
try{
  const res = await axios.post("/auth/login",{
    username: userRef.current.value,
    password: passwordRef.current.value,
  });
  dispatch({ type: "LOGIN_SUCCESS", payload: res.data});
}catch(err){
  dispatch({ type: "LOGIN_FAILURE"});
}
  };

  return (
    <div className="flex w-screen justify-center flex-col h-screen bg-[url('https://cdn.pixabay.com/photo/2017/01/11/12/34/blue-1971718_1280.jpg')] bg-no-repeat bg-cover">
      <center>
        <h1 className="text-white text-[30px] font-serif font-bold">Login</h1>
      </center>
      <center className="mt-5">
        <input
          className="w-96 p-2 h-9 px-3 bg-transparent border border-white outline-none rounded-lg text-white"
          type="text"
          placeholder="Enter your UserName..."
          ref={userRef}
        />
      </center>
      <center className="mt-2">
        <input
          className="w-96 p-2 h-9 px-3 bg-transparent border border-white outline-none rounded-lg text-white"
          type="password"
          placeholder="Enter your Password..."
          ref={(passwordRef)}
        />
      </center>
      <center className="mt-3">
        <button className="text-white w-60 py-1 hover:bg-gradient-to-tr from-black to-blue-800  font-bold border rounded-lg hover:border-white shadow-gray-300 shadow-2xl hover:white content-center font-serif ease-out hover:translate-y-1 transition-all mt-2" type="submit" onSubmit={handleSubmit} disabled={isFetching}>

          Submit
        </button>
      </center>
    </div>
  );
}

export default Login;
