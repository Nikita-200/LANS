import "./write.css"
import {GrAdd} from "react-icons/gr"
export default function Write() {
  return (
    <div className="write">
        <img
          className="writeImg" 
         src="https://www.shutterstock.com/image-photo/blogging-blog-word-coder-coding-260nw-520314613.jpg" alt="" />
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
