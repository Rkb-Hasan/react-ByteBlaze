import { Link } from "react-router-dom";
import placeHolderImage from "../assets/images/404.jpg";
import { MdBookmarkRemove } from "react-icons/md";

const Blog = ({ blog, deletable, handleDelete }) => {
  const { cover_image, title, description, published_at, id } = blog;

  return (
    <div className="flex relative">
      <Link
        to={`/blog/${id}`}
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline border-2 border-primary hover:border-secondary transition hover:scale-105 p-2"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 "
          src={cover_image || placeHolderImage}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs ">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>

      {deletable && (
        <div
          onClick={() => handleDelete(id)}
          className="absolute bg-primary p-3  bg-opacity-30 rounded-full hover:scale-105 -top-5 -right-5 "
        >
          <MdBookmarkRemove
            size={20}
            className=" text-secondary group-hover:text-primary"
          />
        </div>
      )}
    </div>
  );
};

export default Blog;
