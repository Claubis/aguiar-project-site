
import Link from "next/link"

export default function AboutFeedback() {
  return (
    
    <div className="bg-terceira">
      <div className="mx-auto max-w-7xl sm:px-6 ">
        <div className="relative isolate bg-terceira px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-10 lg:pt-0">
          
          <div className="mx-auto max-w-md lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-6xl font-orelega tracking-tight text-black">
            Rate Your Experience</h2>
            <h3 className='mt-6 leading-8 font-sen text-lg md:text-2xl'>If you have already visited us, don't forget to leave your review.</h3>
              
            <p className="mt-6 text-lg leading-8 font-sen md:text-2xl">
            How was your experience with our service? Your feedback is crucial to us as it helps us improve our products and services to better meet your preferences.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              
              <Link
                href="/FormFeedback"
                className="rounded-md bg-[#B7D4DA] px-3.5 py-2.5 text-lg font-sen text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white w-[70%] flex justify-center"
              >
                Get started
              </Link>
             
            </div>
          </div>
          
          <div className="relative mt-16 h-80 lg:mt-8 flex justify-center items-center bg-terceira">
            
            <img
              className="absolute left-0 top-0 lg:top-20  max-w-none ring-1 ring-white/10 w-[100%] md:w-[400px] h-[100%]"
              src="assets/AboutFeedback/imagem2.png"
              alt="Imagem do feedback"
              width={400}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  )
}