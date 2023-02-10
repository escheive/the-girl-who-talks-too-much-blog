
// Dependencies
import { useState } from "react";
// Variables
const FORM_ENDPOINT = "https://public.herotofu.com/v1/bcf645a0-a5ea-11ed-a31e-753411848f80";


export default function ContactForm() {

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };


  if (submitted) {
    return (
      <>
        <div>Thank you!</div>
        <div>I'll be in touch soon.</div>
      </>
    );
  }


  return (

    <div>

        <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
        style={{ textAlign: 'center', width: '300px' }}
        >

        <div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your Name
          </label>
          <input
            type="name"
            id="name"
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' 
            placeholder='First Name | Last Name'
            required
          />
        </div>

        <div className='my-8'>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light' 
            placeholder='youremail@email.com'
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
          <textarea rows={4} id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
        </div>

        <div className='mt-4'>
          <button type="button" className="focus:outline-none text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-blue-900">Submit</button>
        </div>

        </form>

    </div>


  );
};
