import React from 'react'
import "./singlePost.css"
import Img from "./avatar.jpg";
import {BiEdit}  from "react-icons/bi"
import {RiDeleteBin6Line} from "react-icons/ri"

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img
          src={Img} alt="avatar" className='singlePostImg'/>
        <h1 className='singlePostTitle'>Avatar : The Way of Water
        <div className='singlePostEdit'>
          <BiEdit className='singlePostIcon'  size="2rem"/>
          <RiDeleteBin6Line className='singlePostIcon' size="2rem"/>
        </div>
        
        </h1>

        <div className='singlePostInfo'>
            <span className='singlePostAuthor'>Author: <b>NJK</b></span>
            <span className='singlePostDate'>1 hour ago</span>
        </div>

        <p className='singlePostDesc'>
        James Cameron’s ‘Avatar’ was probably the most awaited film of 2009 with all those special effects to bring alive the master director’s vision. A lot has been said about the 300-500 million dollars spent, the new language developed and the special stereoscopic cameras used to film it. The same hype probably works against the film and you feel a little disappointed while the end-credits roll. I am not saying that it is a bad film; Avatar is a good film and is a visual treat; it’s just that the expectations were beyond imagination.
Avatar is a simple film, mounted on a huge canvas to tell the age old story of good versus bad. While the theme is old, it is very relevant to us today as we face the global warming crisis that threatens our very existence. The film is set sometime in the future when there is nothing green left on our ‘dying’ planet. However, the human greed has extended to a moon called Pandora, 4.3 light years from Earth. The aliens (humans in this case) are after a precious mineral called Unobtainium and want the indigenous population of blue coloured species called Na’vi to co-operate, by hook or by crook (read forcibly). The story is about the clash between the Na’vis who worship nature and the aliens who after destroying their own planet, are after theirs.
Cameron successfully manages to create a bond between his audience and the Na’vis who are referred to as the ‘hostiles’ or ‘blue monkeys’ by the invading aliens. He encourages you to look and feel, the life at Pandora through the eyes of the Na’vis and you take in the awesome flora and fauna that seem to be inspired by the legendary Garden of Eden. This is where the director wins; all the technology and the imagination create a new world and experience to remember.
The film essentially belongs to the technicians and the director; kudos to the actors who deliver extremely believable performances. What does not work well in Avatar’s favour is the predictability of the story and its length (162 minutes). Also, the special effects may seem quite regular if seen in 2D (a plus on Jurassic Park maybe) and there are not enough 3D cinemas around the world. I am not too sure if people will go back to the theatre again and again like they did for James Cameron’s last outing, Titanic. Avatar is no Titanic, and may not achieve that success but it is a film that deserves to be watched.

Go watch it, but only in 3D.
        </p>
      </div>

    </div>
  )
}
