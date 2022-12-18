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
import Single from "./pages/single/Single";
import Write from "./pages/write/write";



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
      {
        path:"/post/:id",
        element:<Single/>
      },
      {
        path:"/write",
        element:<Write/>
      }

      
    ]
  },
  
])

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
        
    </div>
  );
}

export default App;
