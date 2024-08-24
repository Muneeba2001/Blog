import BlogModel from "../model/index.js";

const blogConroller = {
  get: async (req, res) => {
    try {
      const blog = await BlogModel.find();
      res.status(200).json({ message: "Blog: ", blog });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error });
    }
  },
  create: async (req, res) => {
    try {
      const { title, content } = req.body;
      const blogData = new BlogModel({
        title,
        content,
      });
      const data = await blogData.save();
      console.log("Data: ", data);
      res.status(200).json({ message: "Blog: ", data });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error });
    }
  },
};

export default blogConroller;
