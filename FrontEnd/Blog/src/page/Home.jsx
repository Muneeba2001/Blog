import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/blog");
        if (response.data.blog) {
          setBlogs(response.data.blog);
        } else {
          setBlogs([]);
        }
        console.log(response.data.blog);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const handlePostBlog = async () => {
    try {
      const response = await axios.post("http://localhost:3000/blog", {
        title,
        content,
      });
      if (response.data.data) {
        setBlogs([...blogs, response.data.data]);
        setTitle("");
        setContent("");
      }
      console.log("New blog posted: ", response.data.data);
    } catch (error) {
      console.error("Error posting blog:", error);
    }
  };

  return (
    <div className="p-5">
      {/* Form to Post a New Blog */}
      <div className="mb-5 flex w-1/2 gap-4 justify-center items-center">
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-1/2 h-16 mb-2 p-2 border rounded"
        />
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="block w-1/2 mb-2 p-2 border rounded"
        ></textarea>
        <button
          onClick={handlePostBlog}
          className="bg-blue-500 w-32 text-white h-12 rounded"
        >
          Post Blog
        </button>
      </div>

      {/* Display Blogs */}
      <div className="grid grid-cols-3 gap-5">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-100"
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{blog.title}</div>
              <p className="text-gray-700 text-base">{blog.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
