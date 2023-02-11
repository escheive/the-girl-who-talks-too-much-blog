

export default function Footer() {

    return (

        <footer className='mb-2'>	
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

    )
}