import Link from 'next/link';
import { SiInstagram, SiTiktok } from 'react-icons/Si'
import { GetServerSideProps } from 'next';
import prisma from '../../lib/prisma';
import Post, { PostProps } from '@/components/Posts/Post'
import PostTwo, { PostTwoProps } from '@/components/Posts/PostTwo'
import PostThree, { PostThreeProps } from '@/components/Posts/PostThree';
import PostFour, { PostFourProps } from '@/components/Posts/PostFour';

// Function to query the database
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // Using prisma to grab all posts
  let feed = await prisma.post.findMany({
    // Only take posts that are marked as published
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  // Take the data grabbed from db and turn it all into strings(this helps with the datetime value in the db)
  feed = JSON.parse(JSON.stringify(feed))
  
  return {
    props: { feed },
  };
};

// setting props to postprops
type Props = {
  feed: PostProps[]
}

const AllPosts: React.FC<Props> = (props) => {


  return (

    <main className='mb-2'>
    
      <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
        
        <div className="mx-0 sm:mx-6">
          

          <div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t flex flex-wrap justify-between my-12">

              {/* Map over the posts and render them in different styles based on where they are on the page */}
              {props.feed.map((post, i) => {
                if (i == 0 || i == 6 ) {
                  i = 0
                  return (
                    <Post post={post} key={post.id} />
                  )
                } if (i == 1 || i == 5 ) {
                  return (
                    <PostTwo post={post} key={post.id} />
                  )
                } if (i == 2 || i == 4 ) {
                  return (
                    <PostThree post={post} key={post.id} />
                  )
                } if ( i == 3 ) {
                  return (
                    <PostFour post={post} key={post.id} />
                  )
                }
              })}
                  
          </div>
                
          <div className="container font-sans bg-yellow-100 rounded my-8 p-4 mx-auto md:p-24 text-center">
            <h2 className="font-bold break-normal text-2xl md:text-4xl">Find me on Social Media</h2>
            <h3 className="font-bold break-normal font-normal text-gray-600 text-base md:text-xl">Instagram and Tiktok</h3>
            <div className="w-full text-center pt-4 mx-auto">
              <a href='#'><SiInstagram className='inline mx-4' size={36}/></a>
              <a href='#'><SiTiktok className='inline mx-4' size={36}/></a>
            </div>
          </div>
                 
        </div>
      
      </div>

    </main>
  );
}

export default AllPosts;