

import "./write.css"
import {GrAdd} from "react-icons/gr"
import img from "./imageee.png"
export default function Write() {
  return (
    <div className="write">
        <img
          className="writeImg" 
         src={img} alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
                {/* <i class="fas fa-plus"></i> */}
                <GrAdd className="writeIcon" />            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>

        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Tell your story.." type="text" className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>

      </form>
    </div>
  )
}
