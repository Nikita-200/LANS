

import "./write.css"
import {GrAdd} from "react-icons/gr"
import img from "./imageee.png"
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  return (
    <div className="write">
      {file && (
        <img
          className="writeImg" 
         src={img} alt="" />)}
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
  );
}
