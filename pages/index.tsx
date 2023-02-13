// Dependencies
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import superjson from 'superjson'
// Components
import Post, { PostProps } from '../components/Posts/Post'
import PostTwo, { PostTwoProps } from '@/components/Posts/PostTwo'
// Database
import prisma from '../lib/prisma'
// Style
import { Inter } from '@next/font/google'
import { SiInstagram, SiTiktok } from 'react-icons/Si'



// db query for all blog posts that are published
export const getStaticProps: GetStaticProps = async () => {
  let feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  feed = JSON.parse(JSON.stringify(feed))
  
  return {
    props: { feed },
    revalidate: 10
  };
};

// setting props to postprops
type Props = {
  feed: PostProps[]
}


// const Home: React.FC<Props> = (props) => {
const Home: React.FC<Props> = (props) => {
  

  return (


    <>


      <main className='mb-2'>  
      
        <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">

          <div className="mx-0 sm:mx-6">
            
            <div className="grid grid-cols-6 gap-x-4 gap-y-10 bg-gray-200 w-full text-gray-800 leading-normal rounded-t">
              
              {props.feed.map((post, i) => {
                if (i % 4 == 0 || i == 0) {
                  return (
                    <div key={post.id} className='post col-span-6'>
                      <Post post={post} />
                    </div>
                  )
                } else {
                  return (
                    <div key={post.id} className="post w-full md:col-span-2 col-span-3">
                      <PostTwo post={post} />
                    </div>
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
    </>
  )
}

export default Home;