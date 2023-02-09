import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import { SiInstagram, SiTiktok } from 'react-icons/Si'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (

    <>

      <main className='mb-2'>  
      
        <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
          
          <div className="mx-0 sm:mx-6">
            

            <div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
              
            
              <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
                <a href="post.html" className="flex flex-wrap no-underline hover:no-underline">
                  <div className="w-full md:w-2/3 rounded-t">	
                    <img src="https://source.unsplash.com/collection/494263/800x600" className="h-full w-full shadow"/>
                  </div>

                  <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                      <p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">GETTING STARTED</p>
                      <div className="w-full font-bold text-xl text-gray-900 px-6">👋 Welcome fellow Tailwind CSS and Ghost fan</div>
                      <p className="text-gray-800 font-serif text-base px-6 mb-5">
                        This starter template is an attempt to replicate the default Ghost theme "Casper" using Tailwind CSS and vanilla Javascript.
                      </p>
                    </div>

                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                      <div className="flex items-center justify-between">
                        <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author"/>
                        <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                      </div>
                    </div>
                  </div>

                </a>
              </div>
              


              
              <div className="flex flex-wrap justify-between pt-12 -mx-6">

                
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                  <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                      <img src="https://source.unsplash.com/collection/225/800x600" className="h-64 w-full rounded-t pb-6"/>
                      <p className="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
                      <div className="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
                      <p className="text-gray-800 font-serif text-base px-6 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula. 
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
              
                
                
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                  <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                      <img src="https://source.unsplash.com/collection/3106804/800x600" className="h-64 w-full rounded-t pb-6"/>
                      <p className="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
                      <div className="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
                      <p className="text-gray-800 font-serif text-base px-6 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ip Aliquam at ipsum eu nunc commodo posuere et sit amet ligula. 
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

              
                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                  <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                    <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                      <img src="https://source.unsplash.com/collection/539527/800x600" className="h-64 w-full rounded-t pb-6"/>
                      <p className="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
                      <div className="w-full  font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
                      <p className="text-gray-800 font-serif text-base px-6 mb-5">
                        Lorem ipsum eu nunc commodo posuere et sit amet ligula. 
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


              </div>
              
                  
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


        <footer>	
          <div className="container max-w-6xl mx-auto flex items-center px-2 pt-8">

            <div className="w-full mx-auto flex flex-wrap items-center">
              <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                <a className="text-gray-700 no-underline hover:text-gray-700 hover:no-underline" href="#">
                  <span className="text-base text-gray-600">The Girlie From Da 808</span>
                </a>
              </div>
              <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                <ul className="list-reset flex justify-center flex-1 md:flex-none items-center">
                  <li>
                  <a className="inline-block py-2 px-3 text-gray-600 hover:text-gray-400 no-underline" href="#">Active</a>
                  </li>
                  <li>
                  <a className="inline-block text-gray-600 no-underline hover:text-gray-400 hover:underline py-2 px-3" href="#">link</a>
                  </li>
                  <li>
                  <a className="inline-block text-gray-600 no-underline hover:text-gray-400 hover:underline py-2 px-3" href="#">link</a>
                  </li>
                  <li>
                  <a className="inline-block text-gray-600 no-underline hover:text-gray-400 hover:underline py-2 px-3" href="#">link</a>
                  </li>
                </ul>
              </div>
            </div>
              

          
          </div>
        </footer>

      </main>
    </>
  )
}
