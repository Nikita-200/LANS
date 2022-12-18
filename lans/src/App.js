import { useContext } from "react";
import { Context } from "./context/Context";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";

import './App.css';

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";





const Layout = ()=>{
  return (
    <div className="app">
        <Navbar/>
        <Outlet/>
        <Footer/>
        
        
    </div>
  )
}

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      // {
      //   path:"/post/:id",
      //   element:<Single/>
      // }
      
    ]
  },
  
])

function App() {

  const { user } = useContext(Context);
  return (
    <div className="App">
        <RouterProvider router={router} />
        
    </div>
   
  );
}

export default App;
