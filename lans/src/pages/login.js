import React from "react";

function Login() {
  return (
    <div className="flex w-screen justify-center flex-col h-screen bg-[url('https://cdn.pixabay.com/photo/2017/01/11/12/34/blue-1971718_1280.jpg')] bg-no-repeat bg-cover">
      <center>
        <h1 className="text-white text-[30px] font-serif font-bold">Login</h1>
      </center>
      <center className="mt-5">
        <input
          className="w-96 p-2 h-9 px-3 bg-transparent border border-white outline-none rounded-lg text-white"
          type="email"
          placeholder="Enter your Email..."
        />
      </center>
      <center className="mt-2">
        <input
          className="w-96 p-2 h-9 px-3 bg-transparent border border-white outline-none rounded-lg text-white"
          type="password"
          placeholder="Enter your Password..."
        />
      </center>
      <center className="mt-3">
        <button className="text-white w-60 py-1 hover:bg-gradient-to-tr from-black to-blue-800  font-bold border rounded-lg hover:border-white shadow-gray-300 shadow-2xl hover:white content-center font-serif ease-out hover:translate-y-1 transition-all mt-2">
          Submit
        </button>
      </center>
    </div>
  );
}

export default Login;
