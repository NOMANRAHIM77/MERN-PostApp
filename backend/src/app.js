const express = require('express')
const app = express()
const postModel = require('./model/post.model')
const multer = require('multer')
const uploadFile = require('./services/storage.service')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const upload = multer({storage:multer.memoryStorage()})


app.post("/create-post",upload.single("image"), async (req,res)=>{
    console.log(req.body)

    const result = await uploadFile(req.file.buffer)
    
    const post = await postModel.create({
        image:result.url,
        caption:req.body.caption
    })

    res.status(200).json({
        messgae:"post craeted successfully",
        post:post
    })

})

app.get("/posts",async (req,res)=>{
    const posts = await postModel.find()

    res.status(200).json({
        message : "posts fetched successfully",
        posts
    })
})

module.exports = app