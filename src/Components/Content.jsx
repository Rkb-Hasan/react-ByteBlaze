import { useLoaderData } from "react-router-dom";
import placeHolderImage from "../assets/images/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
const Content = () => {
  const blog = useLoaderData();
  const {
    cover_image,
    title,
    description,
    published_at,
    body_html,
    tags,
    url,
  } = blog;

  return (
    <div>
      <div className=" mx-auto group hover:no-underline focus:no-underline border-2  p-2">
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 "
          src={cover_image || placeHolderImage}
        />

        <div>
          <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
            {tags.map((tag, idx) => (
              <a
                key={idx}
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900"
              >
                #{tag}
              </a>
            ))}
          </div>
        </div>

        <div>
          <a
            href={url}
            target="blank"
            className="text-2xl font-semibold group-hover:underline group-focus:underline"
          >
            {title}
          </a>
          <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default Content;
