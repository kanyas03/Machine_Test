import { Router } from "express";
import { addBlogs } from "../model/addBlogs.js";
const userauth = Router();
userauth.post('/AddBlogs',async(req,res)=>{
    try{
        const {BlogId,Title,Content,Author,Category}=req.body
    
    
        const existingContent= await addBlogs.findOne({B_Id:BlogId})
        if(existingContent){
                res.status(400).send("Blog already exist");
            }
            else{ 
                
                const newBlog = new addBlogs({
                    B_Id:BlogId,
                    B_Title:Title,                  
                    B_Content:Content,
                    B_Author:Author,
                    B_Category:Category,
                    
                   
                })
                await newBlog.save();
                res.status(201).send("Blog added")
                console.log(newBlog);
        }
    }
    catch (error) {
            console.error("Error in /addBlogs:", error.message);
            res.status(500).json({ error: error.message });
    }
    });
        
    userauth.get('/getBlog',async(req,res)=>{
        try{
            const blogs = await addBlogs.find();
            if(!blogs.length){
                return res.status(404).json({message: "No blogs"})
            }
            console.log(blogs);
            res.status(200).send(blogs)
        }
    
    catch (error) {
            console.error("Error in /addBlogs:", error.message);
            res.status(500).json({ error: error.message });
    }
    });


userauth.put("/updateBlog/:BlogId", async (req, res) => {
    console.log("hi");
    try {
      

        const { BlogId } = req.params;
        const { 
                    Title,                  
                    Content,
                    Author,
                    Category } = req.body;      

        const updatedBlogs = await addBlogs.findOneAndUpdate(
           
          { B_Id:BlogId },{
                    B_Title:Title,                  
                    B_Content:Content,
                    B_Author:Author,
                    B_Category:Category},
            { new: true }
        );

        if (!updatedBlogs) {
            return res.status(404).json({ msg: "Blog not found" });
        }

        res.json({ msg: "Blog updated successfully", updatedBlogs });
    } catch (error) {
        console.error("Error updating Blog:", error);
        res.status(500).json({ msg: "Server error", error });
    }
});



userauth.delete("/deleteBlog/:BlogId", async (req, res) => {
  
    try {     

        const { BlogId } = req.params;
             
        const deleteBlog = await addBlogs.findOneAndDelete({B_Id:BlogId});

        if (!deleteBlog) {
            return res.status(404).json({ msg: "Blog not found" });
        }

        res.json({ msg: "Blog deleted successfully", deleteBlog });
    } catch (error) {
        console.error("Error updating Blog:", error);
        res.status(500).json({ msg: "Server error", error });
    }
});



export {userauth}