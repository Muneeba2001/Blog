import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

const BlogModel = mongoose.model("Blog", BlogSchema);
export default BlogModel;
