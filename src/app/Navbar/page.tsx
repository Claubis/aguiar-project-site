'use client'

/*
Instalar
npm install @headlessui/react
npm install @heroicons/react

*/


/* Importações gerais */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


const navigation = [
  { name: 'Home', href: './' },
  { name: 'Company', href: '/About' },
  { name: 'Services', href: '/Services' },
  { name: 'Quote', href: '/FormQuote' },
  { name: 'Feedback', href: '/FormFeedback' },
  { name: 'Contact', href: '"tel:+4259849284"' },
]

export default function Navbar() {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [activeItem, setActiveItem] = useState('');

  return (

    <div className="bg-white w-full">
      <header className="inset-x-0 top-0 ">
  
        <nav className="flex items-center justify-between p-6 lg:px-8 font-sen " aria-label="Global">
          
          <div className="flex lg:flex-1">
            
            <a href="./" className="-m-1.5 p-1.5">
              <span className="sr-only">Aguiar Cleaning Service</span>
              <img
                className="h-12 w-auto"
                src="/assets/Navbar/Captura de tela 2024-02-13 124000.png"
                alt="Logo da empresa"
              />
            </a>
          </div>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} 
              href={item.href} 
              onMouseOver={() => setActiveItem(item.name)} // Adiciona o item ativo ao passar o mouse
                onClick={() => setActiveItem(item.name)} // Mantém o item ativo ao clicar
                className={`text-xl font-light leading-6 text-gray-900 hover:text-menu-hover navItem ${activeItem === item.name ? 'border-b-2 border-menu-hover' : ''}`}
              >
                {item.name}
              </a>
            ))}
          </div>
          

        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/HomePage" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="/assets/Navbar/Captura de tela 2024-02-13 124000.png"
                  alt="Imagem do logo da empresa"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="/FormQuote"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      
    </div>
  )
}
