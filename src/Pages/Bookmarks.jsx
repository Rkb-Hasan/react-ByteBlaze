import { useEffect, useState } from "react";
import { getBlogs } from "../utils";
import Blog from "../Components/Blog";
import { deleteBlog } from "../utils";
import EmptyStates from "../Components/EmptyStates";
const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  }, []);
  const handleDelete = (id) => {
    deleteBlog(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);
  };

  if (blogs.length < 1)
    return (
      <EmptyStates
        message={"No Bookmarks Found!"}
        address={"/blogs"}
        label={"Go to Blogs"}
      ></EmptyStates>
    );

  return (
    <div className="grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:px-8 lg:px-12 py-8">
      {blogs.map((blog, idx) => (
        <Blog
          key={idx}
          deletable={true}
          blog={blog}
          handleDelete={handleDelete}
        ></Blog>
      ))}
    </div>
  );
};

export default Bookmarks;
