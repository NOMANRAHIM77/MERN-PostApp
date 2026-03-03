import { useState,useEffect } from "react"

import axios from 'axios'

export const  Feed=()=>{

const [posts,setPosts] = useState([
    {
        _id:"1",
        image : "https://cache4.pakwheels.com/system/bike_model_pictures/3540/medium/Cover.png?1756880979",
        caption : "YBR 125"
    },
    {
        _id:"2",
        image : "https://cache4.pakwheels.com/system/bike_model_pictures/3540/medium/Cover.png?1756880979",
        caption : "YBR 125"
    },
    {
        _id:"3",
        image : "https://cache4.pakwheels.com/system/bike_model_pictures/3540/medium/Cover.png?1756880979",
        caption : "YBR 125"
    }

])

useEffect(()=>{
axios.get("http://localhost:3000/posts")
.then((res)=>{
    setPosts(res.data.posts)
})
},[])

    return(
        <>
       <div className="feed-container">
  <h1 className="feed-title">FEED</h1>

  <div className="feed-grid">
    {posts.map((post) => {
      return (
        <div className="feed-card" key={post._id}>
          <img src={post.image} alt="post" className="feed-image" />
          <h2 className="feed-caption">{post.caption}</h2>
        </div>
      );
    })}
  </div>
</div>
        </>
    )
}