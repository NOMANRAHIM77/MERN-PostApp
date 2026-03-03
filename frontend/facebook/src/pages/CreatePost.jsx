import  axios  from "axios"
import {  useNavigate } from "react-router-dom"

export const CreatePost=()=>{

    const navigate = useNavigate()
 async function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    await axios.post("http://localhost:3000/create-post",formData)
          .then((res)=>{
navigate('/feed')
          })

          
}

    return(
        <>
<div className="post-container">
      <div className="post-card">
        <h1 className="post-title">Create Post</h1>

        <form className="post-form" onSubmit={handleSubmit} >
          
          <label className="post-label">Upload File</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="post-input file-input"
          />

          <label className="post-label">Enter Caption</label>
          <input
            type="text"
            name="caption"
            placeholder="Type caption..."
            required
            className="post-input"
          />

          <button type="submit" className="post-btn">
            Submit
          </button>

        </form>
      </div>
    </div>
        </>
    )
}