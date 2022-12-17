import "./settings.css"
import {CgProfile} from "react-icons/cg"
//import Sidebar from "../../components/sidebar/Sidebar"
export default function settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingTitle">
              <span className="settingsUpdateTitle">Update Your Account</span>
              <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
              <label>Profile Picture</label>
              <div className="settingsPP">
                <img src="https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg" alt=""/>
                <label htmlFor="fileInput">
                  {/* <i className="settingsPPIcon far fa-user-circle"></i> */}
                  <CgProfile  className="settingsPPIcon"size="2rem"/>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} /> 
              </div>
              <label>Username</label>
              <input type="text" placeholder="Liya" />
              <label>Email</label>
              <input type="email" placeholder="liyamj2002@gmail.com" />
              <label>Password</label>
              <input type="password" />
              <button className="settingsSubmit">Update</button>
              

            </form>
        </div>
        {/* <Sidebar/>  */}
       
    </div>
  )
}
