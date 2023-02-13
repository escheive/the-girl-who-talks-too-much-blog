
// Dependencies
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
// Icons
import { SiInstagram, SiTiktok } from 'react-icons/Si';
// Floating ui dependencies
import { safePolygon, useFloating, useHover, useInteractions } from '@floating-ui/react';



export default function navbar() {


    // usestate for floating-ui hover events
    const [isOpen, setIsOpen] = useState(false)

    // For use with floating-ui and positioning tooltips
    const {x, y, refs, context} = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
    });
    
    // useHover function for floating-ui
    const { getFloatingProps, getReferenceProps } = useInteractions([
        useHover(context, {
            restMs: 150,
            delay: {open: 600},
            handleClose: safePolygon({
                restMs: 50,
            }),
        }),
    ])
    
    // router function so that the nav can dynamically render classes based on which link is active
    const router = useRouter();


    return (

        <>

            <Head>
                <title>The Girl Who Talks Too Much Blog</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div className="w-full m-0 p-0 bg-cover bg-bottom" style={{ height: '60vh', maxHeight: '460px' }}>
                <div className="container max-w-5xl mx-auto pt-16 md:pt-32 text-center break-normal">
                
                    <p className="text-white font-extrabold text-3xl md:text-5xl lg:text-6xl xl:text-7xl" id='ui-reference' ref={refs.setReference} {...getReferenceProps()}>
                        The Girl Who Talks Too Much
                    </p>
                    {isOpen && (
                        <div
                            className='ui-floating bg-gray-200 text-gray-500 p-5 rounded-lg absolute border-gray'
                            ref={refs.setFloating}
                            style={{
                                top: y ?? 0,
                                left: x ?? 0,
                                width: 'max-content',
                            }}
                            {...getFloatingProps()}
                        >
                            I don't actually talk that much!
                            <div id='arrow'></div>
                        </div>
                    )}
                    <p className="text-xl md:text-2xl text-gray-500">From the 808</p>
                </div>

                <nav className="mt-4 w-full max-w-5xl mx-auto">
                    <div className="container mx-auto flex items-center">
                    
                    <div className="flex w-1/2 pl-4 text-md">
                        <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                        <li className="mr-2">
                        <Link href='/' className={`${ router.pathname === '/' ? 'text-gray-700 font-bold hover:text-gray-400' : 'hover:text-gray-400' } 'inline-block py-2 px-2 text-gray-600 no-underline' `}>HOME</Link>
                        </li>
                        <li className="mr-2">
                        <Link className={`${ router.pathname === '/posts/all' ? 'text-gray-700 font-bold hover:text-gray-400' : 'hover:text-gray-400' } 'inline-block py-2 px-2 text-gray-600 no-underline' `} href="/posts/all">POSTS</Link>
                        </li>
                        <li className="mr-2">
                        <Link className={`${ router.pathname === '/contact' ? 'text-gray-700 font-bold hover:text-gray-400' : 'hover:text-gray-400' } 'inline-block py-2 px-2 text-gray-600 no-underline' `} href="/contact">CONTACT</Link>
                        </li>
                        <li className="mr-2">
                        <Link className={`${ router.pathname === '/posts/create' ? 'text-gray-700 font-bold hover:text-gray-400' : 'hover:text-gray-400' } 'inline-block py-2 px-2 text-gray-600 no-underline' `} href="/posts/create">CREATE</Link>
                        </li>
                        </ul>
                    </div>


                    <div className="flex w-1/2 justify-end content-center">		
                        <a className="inline-block text-gray-600 no-underline hover:text-gray-400 text-center h-10 p-2 md:h-auto md:p-4 avatar" data-tippy-content="@instagram_handle" rel='noreferrer' href="https://www.instagram.com/katee.emi/" target='_blank'>
                        <SiInstagram size={24} />
                        </a>

                        <a className="inline-block text-gray-600 no-underline hover:text-gray-400 text-center h-10 p-2 md:h-auto md:p-4 avatar" data-tippy-content="#facebook_id" rel='noreferrer' href="https://www.tiktok.com/@kateemi808" target='_blank'>
                        <SiTiktok size={24}/>
                        </a>

                    </div>

                    </div>
                </nav>
            </div>
        </>

    )
}