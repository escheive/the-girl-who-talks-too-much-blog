
import Router from "next/router";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Image from "next/image";
import superjson from 'superjson'

export type PostProps = {
  id: string;
  title: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  content: object;
  published: boolean;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {

  return (

    <div className="w-full flex h-full bg-white rounded overflow-hidden shadow-lg">
      <Link href={`/posts/${post.id}`} className="w-full flex flex-wrap no-underline hover:no-underline">
        <div className="w-full md:w-2/3 rounded-t">	
          <img
            src="https://source.unsplash.com/collection/494263/800x600"
            alt='img'
            className="h-full w-full shadow" 
          />
        </div>

        <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
            <p className="w-full text-gray-600 text-sm md:text-base pt-6 px-6">{post.author}</p>
            <div className="w-full font-bold md:text-2xl text-xl text-gray-900 px-6">{post.title}</div>
            <p className="text-gray-800 font-serif md:text-xl text-base px-6 mb-5">{post.content.content}</p>
            </div>

            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
              <div className="flex items-center justify-end">
                  <p className="text-gray-600 text-xs md:text-sm">{post.created_at.slice(0, 10)}</p>
              </div>
            </div>
        </div>

        </Link>
    </div>
  );
};

export default Post;