import mongoose from 'mongoose';
import {model} from 'mongoose';

const Blogs = new mongoose. Schema({  
     B_Id:{type:String,required:true,unique:true, trim:true },
     B_Title:{type:String,required:true},
     B_Content:{type:String,required:true},
     B_Author:{type:String,required:true},
     B_Category: {type: String, enum: ['Technology', 'Health', 'Lifestyle', 'Education'],
 required: true
 },
B_caretAt :{type: Date,
 default: Date.now }
})
const addBlogs = model('Blog',Blogs)
export {addBlogs}

//const blogSchema = new mongoose.Schema({
// title: {
// type: String,
// required: true,
// trim: true
// },
// content: {
// type: String,
// required: true
// },
// author: {
// type: String,
// required: true
// },
// category: {
// type: String,
// enum: ['Technology', 'Health', 'Lifestyle', 'Education'],
// required: true
// },
// createdAt: {
// type: Date,

// default: Date.now
// }
// });