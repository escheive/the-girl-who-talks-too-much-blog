
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type PostTwoProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

const PostTwo: React.FC<{ post: PostTwoProps }> = ({ post }) => {

  const authorName = post.author ? post.author.name : "Unknown author";

  return (

    <div>
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
          <img src="https://source.unsplash.com/collection/225/800x600" className="h-auto w-full rounded-t pb-6"/>
          <p className="w-full text-gray-600 text-xs sm:text-sm px-6">{authorName}</p>
          <div className="w-full font-bold sm:text-xl text-sm text-gray-900 px-6">{post.title}</div>
          <p className="text-gray-800 font-serif sm:text-base text-xs px-6 mb-5">
            {post.content}
          </p>
        </a>
      </div>
      <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
        <div className="flex items-center justify-between">
          <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author"/>
          <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
        </div>
      </div>
    </div>
  );
};

export default PostTwo;