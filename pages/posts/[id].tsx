import Link from 'next/link';
import { GetServerSideProps } from 'next';
import prisma from '../../lib/prisma';


export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let post = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  post = JSON.parse(JSON.stringify(post))

  return {
    props: post,
  };
};



const Post: React.FC<PostProps> = (props) => {

  let title = props.title
  if (!props.published) {
    title = `${title} (Draft)`
  }
  console.log(props.created_at)

  return (

    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">

      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <header className="mb-4 lg:mb-6 not-format">
                <address className="flex items-center mb-6 not-italic">
                    <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                        <img className="mr-4 w-16 h-16 rounded-full" src="" alt="Katee" />
                        <div>
                            <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">{props.authorName}</a>
                            <p className="text-base font-light text-gray-500 dark:text-gray-400">{props.createdAt.slice(0, 10)}</p>
                            
                        </div>
                    </div>
                </address>
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{title}</h1>
              </header>
              <p className="lead">{props.content}</p>
          </article>
      </div>

      <section className="not-format">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion (20)</h2>
        </div>
        <form className="mb-6">
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <label className="sr-only">Your comment</label>
                <textarea id="comment" rows={6}
                    className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                    placeholder="Write a comment..." required></textarea>
            </div>
            <button type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                Post comment
            </button>
        </form>
      </section>

    </main>
  );
}

export default Post;