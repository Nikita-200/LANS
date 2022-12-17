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
import Settings from "./pages/settings/settings";
import Write from "./pages/write/write";
{/*

const Layout = ()=>{
  return (
    <div className="app">
        <Navbar/>
        <Outlet/>
        <Footer/>
        <Settings/>
        
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
      }
      
    ]
  },
  
])*/}

function App() {
  return (
    <div className="App">
       {/* <RouterProvider router={router} />*/}
       <Write/>
    </div>
    // <write/>
  );
}

export default App;
