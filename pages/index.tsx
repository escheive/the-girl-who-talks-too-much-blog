// Dependencies
import { GetStaticProps } from 'next'
// Components
import Post, { PostProps } from '../components/Posts/Post'
import PostTwo from '@/components/Posts/PostTwo'
// Database
import prisma from '../lib/prisma'
// Style
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
            
            <div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t flex flex-wrap justify-between items-center my-12">
              
              {props.feed.map((post, i) => {
                if (i % 4 == 0 || i == 0) {
                  return (
                    <Post post={post} key={post.id} />
                  )
                } else {
                  return (
                      <PostTwo post={post} key={post.id} />
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