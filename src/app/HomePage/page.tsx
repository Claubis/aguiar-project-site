'use client'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


export default function HomePage() {
  

  return (
    <div className="bg-primeira h-[100vh] justify-center items-center mb-20">
      
      <div className="relative isolate px-6 md:pt-14 lg:px-8">
        
        <div className="mx-auto max-w-2xl py-10 sm:py-48 lg:py-56">
          
          <div className="sm:mb-10 sm:flex sm:justify-center">
            
            <div className="relative rounded-full px-5 py-1 text-sm md:text-lg leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 font-sen mb-10 md:mb-0 w-[40%]md:w-[100%]">
              We have insurance.{' '}
              
            </div>
          </div>
          <div className="text-center">
            
            <h1 className="text-6xl font-orelega tracking-tight text-gray-900">
              Aguiar Cleaning Service
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600 font-sen">
            Our cleaning services are conducted with the same level of care and attention to detail as if we were cleaning our own homes, ensuring a thorough and meticulous cleaning experience for our clients.
            </p>

            <div className="mt-6 grid md:flex items-center justify-center md:justify-center gap-x-6">

              <div>
                <a
                href="/FormQuote"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-orelega text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full md:w-[40%]"
              >
                Request your quote
              </a>
              </div>

              <div>
                <p className="text-sm font-sen leading-6 text-gray-900 mt-10 md:mt-0">
              care, attention and details <span aria-hidden="true"></span>
              </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}