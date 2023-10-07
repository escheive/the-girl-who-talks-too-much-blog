import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { PostProps } from "../../components/Posts/Post"
import prisma from '../../lib/prisma';
import { SiInstagram, SiTiktok } from 'react-icons/Si';
import supabase from '@/supabase';
import { fetchSinglePostData } from '@/data';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const postId = params?.id as string;

  try {
    // Fetch single post data using the fetchSinglePostData function
    const post = await fetchSinglePostData(postId);

    if (!post) {
      return {
        notFound: true, // return a 404 status if the post is not found
      };
    }

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error('Error fetching post:', error);

    return {
      notFound: true, // return a 404 status in case of an error
    };
  }
};


const Post: React.FC<PostProps> = (props) => {
  const { title, content, author, createdAt, updatedAt, published } = props.post;


  return (

    <main className="-mt-32 bg-white dark:bg-gray-900">  
      
      {/* <!--Title--> */}
      <div className="text-center pt-16 pb-8">
        <p className="text-sm md:text-base text-green-500 font-bold">{createdAt}</p>
        <p className="text-lg md:text-xl text-green-500 font-bold">Written by {author}</p>
        <h1 className="py-2 font-bold break-normal text-3xl md:text-5xl">{title}{!published ? `(Draft)` : null }</h1>
      </div>

      {/* <!--image--> */}
      <div className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded" style={{backgroundImage: `url('https://source.unsplash.com/collection/1118905/')`, height: '75vh'}}></div>
      
      {/* <!--Container--> */}
      <div className="container max-w-5xl mx-auto -mt-32">
        
        <div className="mx-0 sm:mx-6">
          
          <div className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal" >
            
            {/* <!--Post Content--> */}
            

            {/* <!--Lead Para--> */}
            <p className="text-2xl md:text-3xl mb-5">{content.content}</p>		
                     
            {/* <!--/ Post Content--> */}
                
          </div>
          
          
            {/* <!--Subscribe-->	 */}
            <div className="container font-sans bg-yellow-100 rounded my-8 p-4 mx-auto md:p-24 text-center">
                <h2 className="font-bold break-normal text-2xl md:text-4xl">Find me on Social Media</h2>
                <h3 className="font-bold break-normal font-normal text-gray-600 text-base md:text-xl">Instagram and Tiktok</h3>
                <div className="w-full text-center pt-4 mx-auto">
                  <a href='#'><SiInstagram className='inline mx-4' size={36}/></a>
                  <a href='#'><SiTiktok className='inline mx-4' size={36}/></a>
                </div>
              </div>
            {/* <!-- /Subscribe--> */}
          
      
            {/* <!--Author--> */}
            <div className="flex w-2/3 items-center mx-auto font-sans p-8 md:p-24">
              <img className="w-10 h-10 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
              <div className="flex-1">
                <p className="text-base font-bold text-base md:text-xl leading-none">{props.author?.name}</p>
                <p className="text-gray-600 text-xs md:text-base">If you want to find out more about me, click <a className="text-gray-800 hover:text-yellow-300 no-underline border-b-2 border-yellow-300" href="https://www.tailwindtoolbox.com">here</a></p>
              </div>
              <div className="justify-end">
                <button className="bg-transparent border border-gray-500 hover:border-yellow-300 text-xs text-gray-500 hover:text-yellow-300 font-bold py-2 px-4 rounded-full">Read More</button>
              </div>
            </div>
            {/* <!--/Author--> */}
          
        </div>
      

      </div>




      <div className="bg-gray-200">
      
        <div className="container w-full max-w-6xl mx-auto px-2 py-8">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/3 px-2 pb-12">
              <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
                <a href="#" className="no-underline hover:no-underline">
                    <img src="https://source.unsplash.com/_AjqGGafofE/400x200" className="h-48 w-full rounded-t shadow-lg" />
                    <div className="p-6 h-auto md:h-48">	
                      <p className="text-gray-600 text-xs md:text-sm">GETTING STARTED</p>
                      <div className="font-bold text-xl text-gray-900">Lorem ipsum dolor sit amet.</div>
                      <p className="text-gray-800 font-serif text-base mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula. 
                      </p>
                    </div>
                    <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                      <img className="w-8 h-8 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                      <p className="text-gray-600 text-xs md:text-sm">2 MIN READ</p>
                    </div>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-2 pb-12">
              <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
                <a href="#" className="no-underline hover:no-underline">
                    <img src="https://source.unsplash.com/_AjqGGafofE/400x200" className="h-48 w-full rounded-t shadow" />
                    <div className="p-6 h-auto md:h-48">	
                      <p className="text-gray-600 text-xs md:text-sm">UNDERWATER</p>
                      <div className="font-bold text-xl text-gray-900">Biolumini algae diatomeae ecology.</div>
                      <p className="text-gray-800 font-serif text-base mb-5">
                        Lorem ipsum dolor sit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula. 
                      </p>
                    </div>
                    <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                      <img className="w-8 h-8 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                      <p className="text-gray-600 text-xs md:text-sm">4 MIN READ</p>
                    </div>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-2 pb-12">
              <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
                <a href="#" className="no-underline hover:no-underline">
                    <img src="https://source.unsplash.com/DEa8_vxKlEo/400x200" className="h-48 w-full rounded-t shadow" />
                    <div className="p-6 h-auto md:h-48">	
                      <p className="text-gray-600 text-xs md:text-sm">FOREST</p>
                      <div className="font-bold text-xl text-gray-900">What is life but a teardrop in the eye of infinity?</div>
                      <p className="text-gray-800 font-serif text-base mb-5">
                        Mollis pretium integer eros et dui orci, lectus nec elit sagittis neque. Dignissim ac nullam semper aliquet volutpat, ut scelerisque.
                      </p>
                    </div>
                    <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                      <img className="w-8 h-8 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                      <p className="text-gray-600 text-xs md:text-sm">7 MIN READ</p>
                    </div>
                </a>
              </div>
            </div>

            <section className="not-format w-full">
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
            
          </div>
        </div>

        </div>

    </main>
  );
}

export default Post;

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const postId = params?.id as string;

//   try {
//     const { data: post, error } = await supabase
//       .from('posts')
//       .select()
//       .eq('id', postId)
//       .single();

//       if (error || !post) {
//         return {
//           notFound: true, // return a 404 status if the post is not found
//         };
//       }

//       const createdAtDate = new Date(post.created_at);
//       const formattedDate = createdAtDate.toISOString().split('T')[0];

//       const postData = {
//         title: post.title,
//         content: post.content.content,
//         author: post.author,
//         createdAt: formattedDate,
//       };

//       return {
//         props: {
//           post: postData,
//         },
//       };
//   } catch (error) {
//     console.error('Error fetching post:', error);

//     return {
//       notFound: true, // return a 404 status in case of an error
//     }
//   }
// };