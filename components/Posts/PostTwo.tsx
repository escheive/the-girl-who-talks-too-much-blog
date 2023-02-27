
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

// https://www.w3resource.com/javascript-exercises/javascript-string-exercise-24.php
// To truncate posts and limit the amount of words that will be displayed
function truncate(str: string, no_words: any) {
  return str.split(' ').splice(0, no_words).join(' ');
}

const PostTwo: React.FC<{ post: PostTwoProps }> = ({ post }) => {

  const authorName = post.author ? post.author.name : "Unknown author";

  return (

    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">

        <Link href={`/posts/${post.id}`} className="no-underline hover:no-underline flex flex-wrap">
        <div className="flex flex-wrap">
          <img src="https://source.unsplash.com/collection/225/800x600" className="h-72 w-full rounded-t pb-6"/>
          <p className="w-full text-gray-600 text-xs sm:text-sm px-6">{authorName}</p>
          <div className="w-full font-bold sm:text-xl text-sm text-gray-900 px-6">{post.title}</div>
          <ReactMarkdown 
            className="text-gray-800 font-serif md:text-xl text-base px-6 mb-5"
            children={truncate(post.content, 4)}
          />
        </div>
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