'use client'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import Image from 'next/image'

function classNames(...classes: (string | undefined | null | boolean)[]): string {
    return classes.filter(Boolean).join(' ');
  }
  

export default function FormQuote() {
  const [agreed, setAgreed] = useState(false)

  return (

    <div className='bg-segunda'>
        
        <div className="isolate bg-segunda grid md:flex p-5 pt-20 md:pt-0 max-w-[1280px] mx-auto min-h-[100vh]">
        
        {/* Bloco de textos */}
        <div className="mx-auto max-w-2xl grid justify-center md:justify-start gap-5 text-start  md:flex md:flex-col p-0 md:p-10 mt-0 md:mt-20">
            
            <h1 className="text-6xl font-orelega tracking-tight text-gray-900 mt-20 ">Request your Quote</h1>

            <h2 className="mt-2 leading-8 font-sen text-2xl md:text-4xl" >Fill out our no-obligation quote form.</h2>

            <p className="mt-2 font-sen text-lg leading-8 md:text-2xl md:leading-10">
            Let us take care of your home, allowing you to enjoy your free time for family moments, explore new knowledge, or simply relax.
            </p>
            <h2 className="mt-2 font-sen text-lg leading-8 md:text-2xl md:leading-10">We're looking forward to meeting you and making your home the best place it can be.</h2>

            <div className="flex justify-center hidden md:flex">
                <Image className='' src="/assets/FormQuote/imagem3-removebg-preview.png" width={400} height={300} alt='Image about quote'></Image>
            </div>

        </div>

            {/* Bloco do formulário */}
        <div className='w-full mt-20'>
            
            <form action="#" method="POST" className="mx-auto mt-16 md:max-w-[80%] bg-white p-5 rounded-lg" data-netlify="true">
                
                <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 md:flex md:flex-col">

                    {/* Personal information */}
                    <div className='grid'>

                        <div>
                            <h2 className='font-orelega text-lg mb-2 text-indigo-600'>Personal information</h2>
                        </div>

                        <div className='grid grid-col-2 gap-5'>

                            {/* First name */}
                            <div>
                                
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                First name
                                </label>

                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            {/* Last name */}
                            <div>
                                
                                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Last name
                                </label>

                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>

                            </div>

                            {/* E-mail */}
                            <div className="sm:col-span-2">
                                
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                Email
                                </label>

                                <div className="mt-1">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        
                            {/* Phone number */}
                            <div className="sm:col-span-2">
                                
                                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                                Phone number
                                </label>

                                <div className="relative mt-1">
                                    <div className="absolute inset-y-0 left-0 flex items-center">
                                        <label htmlFor="country" className="sr-only">
                                        Country
                                        </label>
                                        <select
                                        id="country"
                                        name="country"
                                        className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                        >
                                        <option>US</option>
                                        <option>CA</option>
                                        <option>EU</option>
                                        </select>
                                        <ChevronDownIcon
                                        className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                                        aria-hidden="true"
                                        />
                                    </div>
                                
                                <input
                                    type="tel"
                                    name="phone-number"
                                    id="phone-number"
                                    autoComplete="tel"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Residential information */}
                    <div>

                        <div>
                            <h2 className='font-orelega text-lg mb-2 text-indigo-600'>Your address</h2>
                        </div>

                        <div className='grid grid-col-2 gap-5'>
                            {/* Address */}
                            <div className="sm:col-span-2">
                                    
                                    <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Address
                                    </label>

                                    <div className="mt-2.5">
                                    
                                        <input
                                            type="number"
                                            name="address"
                                            id="address"
                                            autoComplete="address"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                            </div>

                            {/* Zip code */}
                            <div>
                                    
                                    <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Zip code
                                    </label>

                                    <div className="mt-2.5">
                                        <input
                                            type="number"
                                            name="code"
                                            id="code"
                                            autoComplete="code"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                            </div>

                            {/* Square feet */}
                            <div>
                                    
                                    <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Square feet
                                    </label>

                                    <div className="mt-2.5">
                                    
                                        <input
                                            type="number"
                                            name="square"
                                            id="square"
                                            autoComplete="square"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                            </div>

                            {/* Descrição */}
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                Do you need any additional services?
                                </label>
                                <div className="mt-2.5">
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={2}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* additional  information */}
                    <div>
                        
                        <div>
                            <h2 className='font-orelega text-lg mb-2 text-indigo-600'>Additional  information</h2>
                        </div>

                        <div className='flex flex-col md:grid md:grid-cols-2 md:gap-5'>

                            {/* Rooms */}
                            <div>
                                    
                                    <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                                    How many rooms
                                    </label>

                                    <div className="mt-2.5">
                                    
                                    <select
                                    id="room"
                                    name="room"
                                    autoComplete="room"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                    <option>Select an option</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>Mais</option>
                                    </select>
                                    </div>
                            </div>

                            {/* Frequency */}
                            <div>
                                    
                                    <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900 mt-5 md:mt-0">
                                    What is the frequency?
                                    </label>

                                    <div className="mt-2.5">
                                    
                                    <select
                                    id="frequency"
                                    name="frequency"
                                    autoComplete="frequency"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                    <option>Select an option</option>
                                    <option>Once</option>
                                    <option>Daily</option>
                                    <option>Weekly</option>
                                    <option>Biweekly</option>
                                    <option>Monthly</option>
                                    </select>
                                    </div>
                            </div>

                            {/* Pets */}
                            <div>
                                    
                                    <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900 mt-5 md:mt-0">
                                    Do you have pets?
                                    </label>

                                    <div className="mt-2.5">
                                    
                                    <select
                                    id="pets"
                                    name="pets"
                                    autoComplete="pets"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                    <option>Select an option</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                    </select>
                                    </div>
                            </div>

                            {/* Kind of cleaning */}
                            <div>
                                    
                                    <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900 mt-5 md:mt-0">
                                    What kind of cleaning
                                    </label>

                                    <div className="mt-2.5">
                                    
                                    <select
                                    id="kind"
                                    name="kind"
                                    autoComplete="kind"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                    <option>Select an option</option>
                                    <option>Regular cleaning</option>
                                    <option>Deep</option>
                                    <option>Mov-in or Mov-out</option>
                                    <option>Commercial</option>
                                    <option>Ocasional</option>
                                    </select>
                                    </div>
                            </div>

                        </div>

                    </div>
                
                </div>

                {/* Botão */}
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Request your quote Free
                    </button>

                </div>

            </form>
        </div>
        </div>

    </div>
  )
}