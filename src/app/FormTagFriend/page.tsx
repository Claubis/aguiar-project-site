'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'

function classNames(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}


export default function FormTagFriend() {
  const [agreed, setAgreed] = useState(false)

  return (
    
    <div className="isolate bg-[white] px-6 py-10 lg:px-8">
      
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#9FC6CE] to-[#9FC6CE] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      
      <div className="mx-auto max-w-2xl grid gap-10 mt-20">
        <h2 className="text-5xl font-bold tracking-tight text-gray-900 mt-20">Refer Your Friend</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
        Share the experience! Refer a friend, and both of you can enjoy exclusive benefits. Fill out the form below to get started.
        </p>
      </div>

      <form
      method="POST" 
      className="mx-auto mt-16 max-w-xl sm:mt-20" 
      name='formulario-refer-friend' 
      data-netlify="true">
        
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          
          <div>
            
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Your First name
            </label>
            
            <div className="mt-2.5">
              
              <input
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="firstName"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          
          <div>
            
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
            Name of Your Referral
            </label>
            
            <div className="mt-2.5">
              <input
                type="text"
                name="referralName"
                id="referralName"
                autoComplete="referralName"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
         
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder='Enter your friends email' 
              />
            </div>

          </div>

          <div className="sm:col-span-2">
            
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number
            </label>

            <div className="relative mt-2.5">
              
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                autoComplete="phoneNumber"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

          </div>

          <div className="sm:col-span-2">
            
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>

            <div className="mt-2.5">
              
              <textarea
                name="message"
                id="message"
                autoComplete="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

          </div>

        </div>

        <div className="mt-10 flex justify-center block w-lg rounded-md bg-[#9FC6CE] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#CFE3E7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          
          <button type="submit">
            Send and enjoy
          </button>

        </div>
        
      </form>

    </div>
  )
}