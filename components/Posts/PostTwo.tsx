
import Router from "next/router";
import ReactMarkdown from "react-markdown";
import Link from 'next/link'

export type PostTwoProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  content: string;
  published: boolean;
};

const PostTwo: React.FC<{ post: PostTwoProps }> = ({ post }) => {

  const authorName = post.author ? post.author.name : "Unknown author";

  return (

    <div>
      <div className="h-full flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
        <Link href={`/posts/${post.id}`} className="flex flex-wrap no-underline hover:no-underline">
          <img src="https://source.unsplash.com/collection/225/800x600" className="h-auto w-full rounded-t pb-6"/>
          <p className="w-full text-gray-600 text-xs sm:text-sm px-6">{authorName}</p>
          <div className="w-full font-bold sm:text-xl text-sm text-gray-900 px-6">{post.title}</div>
          <p className="text-gray-800 font-serif sm:text-base text-xs px-6 mb-5">
            {post.content}
          </p>
        </Link>
      </div>
      <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
        <div className="flex items-center justify-end">
            <p className="text-gray-600 text-xs md:text-sm">{post.createdAt.slice(0, 10)}</p>
        </div>
      </div>
    </div>
  );
};

export default PostTwo;