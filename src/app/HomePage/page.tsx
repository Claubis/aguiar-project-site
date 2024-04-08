'use client'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


export default function HomePage() {
  

  return (
    <div className="bg-segunda h-[100vh] justify-center">
      
      <div className="relative isolate px-6 pt-14 lg:px-8">
        
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 font-sen">
              We have insurance.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-orelega tracking-tight text-gray-900 sm:text-6xl">
              Aguiar Cleaning Service
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 font-sen">
            Our cleaning services are conducted with the same level of care and attention to detail as if we were cleaning our own homes, ensuring a thorough and meticulous cleaning experience for our clients.
            </p>
            <div className="mt-10 grid md:flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-orelega text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full md:w-[40%]"
              >
                Request your quote
              </a>
              <a href="#" className="text-sm font-sen leading-6 text-gray-900 mt-10">
              care, attention and details <span aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}