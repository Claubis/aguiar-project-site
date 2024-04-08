

/* Importação dos icones */
/* Instalar: npm install @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons @fortawesome/fontawesome-svg-core
 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

import Link from 'next/link';

const links = [
  { name: 'Resquest your Quote', href: '/FormQuote' },
  { name: 'Your feedback', href: '/FormFeedback' },
    
  ]
  const stats = [
    { name: 'North Bend, Issaquah, Sammamish, Mercer Island, Redmond, Bellevue, Kirkland, Woodinville, Bothel, Snohomish, Edmonds, Lake Forest and Mukilteo.', value: 'Cities' },
    { name: 'Our schedules are flexible, and you can set them in coordination with our team. We offer weekly, bi-weekly, and monthly cleaning options.', value: 'Hour and Frequency' },
    { name: 'Regular cleaning, Deep, Move-in, Move-out, Commercial and Ocasional.', value: 'Services' },
    { name: 'Contact us through social media, by phone, email, WhatsApp, or via our free quote form.', value: 'Contact' },
  ]
  
  export default function About() {
    return (
      <div className="relative isolate overflow-hidden bg-segunda py-24 sm:py-32">
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-6xl font-orelega tracking-tight text-black sm:text-6xl">About us</h2>
            <p className="mt-6 text-lg leading-8 text-black font-sen">
            We are a family-owned company with excellent references and experience. We are committed to delivering great service within your budget. If you are looking for a cleaning company you can trust, please contact us.
            </p>
          </div>
          
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-sen leading-7 text-[#B7D4DA] sm:grid-cols-2 md:flex lg:gap-x-10 text-indigo-600">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-10 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 items-start font-sen">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse items-start">
                  <dt className="text-base leading-7 text-gray-900 items-start">{stat.name}</dt>
                  <dd className="text-2xl font-orelega leading-9 tracking-tight text-black">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            
            <h1 className="font-orelega tracking-tight text-black sm:text-3xl mt-20">Visite nossas redes sociais</h1>
            
            <div className='flex gap-5 mt-5'>
                <a className='w-10' href="https://www.instagram.com/cleaningaguiar?igsh=bTFrbG5kcnk2N2pq"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                <a className='w-10' href="https://www.facebook.com/profile.php?id=61556084715198&mibextid=ZbWKwL"><FontAwesomeIcon icon={faSquareFacebook} size="2x" /></a>
            </div>
        </div>
      </div>
    )
  }