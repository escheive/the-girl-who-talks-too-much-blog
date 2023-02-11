
import ContactForm from "@/components/ContactForm"

export default function contact() {

    return (

        <div className='-mt-32 flex flex-col items-center'>

            <h1 className='text-gray-600 font-bold text-3xl md:text-4xl lg:text-5xl'>Contact Me</h1>
            <p className='mb-16'>Send me a message!</p>
            <ContactForm />

        </div>

    )
}