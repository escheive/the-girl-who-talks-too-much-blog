import Router from "next/router";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Image from "next/image";
import superjson from 'superjson'

export type PostThreeProps = {
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

const PostThree: React.FC<{ post: PostThreeProps }> = ({ post }) => {

    const authorName = post.author ? post.author.name : "Unknown author";

    return (

        <div className="w-full md:w-3/5 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                <Link href={`/posts/${post.id}`} className="no-underline hover:no-underline flex flex-wrap">
                    <img src="https://source.unsplash.com/collection/225/800x600" className="h-full w-full rounded-t pb-6"/>
                    <p className="w-full text-gray-600 text-xs md:text-sm px-6">{authorName}</p>
                    <div className="w-full font-bold text-xl text-gray-900 px-6">{post.title}</div>
                    <ReactMarkdown 
                    className="text-gray-800 font-serif md:text-xl text-base px-6 mb-5"
                    children={post.content}
                    />
                </Link>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                <div className="flex items-center justify-between">
                <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author"/>
                <p className="text-gray-600 text-xs md:text-sm">{post.createdAt.slice(0, 10)}</p>
                </div>
            </div>
        </div>
    );
};

export default PostThree;