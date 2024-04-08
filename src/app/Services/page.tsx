

const features = [
    { name: 'Regular Cleaning', description: 'In the hustle and bustle of everyday life, its easy to let household cleaning slide. Thats why we are here to help keep your home fresh, organized, and inviting. Our regular cleaning services are designed to streamline your life and ensure you come home to an immaculate environment every time.' },
    { name: 'Deep Cleaning', description: 'In the midst of lifes demands, thorough cleaning often gets neglected. Thats where we step in to provide a comprehensive solution. Our deep cleaning services go the extra mile, tackling every nook and cranny to restore your space to its pristine condition. Trust us to revitalize your home, leaving it spotless and refreshed.' },
    { name: 'Mov-out', description: 'When it comes to moving, the last thing you need is the stress of cleaning. Whether you are moving in or out, we ve got you covered. Our specialized move-in/move-out cleaning services ensure that your new space is fresh and welcoming or that you leave your previous home spotless. Trust us to handle the cleaning so you can focus on the excitement of your new journey.' },
    { name: 'Ocasional', description: 'We understand the importance of first impressions and strive to make every stay memorable. Our meticulous cleaning ensures that your property is always guest-ready, leaving visitors impressed and eager to return. Trust us to maintain the cleanliness and charm of your residence, so you can focus on providing a delightful experience for your guests.' },
    { name: 'Commercial', description: 'In the commercial realm, cleanliness is crucial. Our tailored services meet your business needs, ensuring professionalism and hygiene in every corner. With meticulous attention, we leave a positive impression on clients and employees. Trust us to maintain your commercial property, while you focus on core objectives.' },
    { name: 'Considerations', description: 'Our cleaning services are conducted with the same level of care and attention to detail as if we were cleaning our own homes, ensuring a thorough and meticulous cleaning experience for our clients.' },
  ]
  
  export default function Services() {
    return (
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className='grid gap-10'>
            <h2 className="text-6xl font-orelega tracking-tight text-gray-900 sm:text-6xl">Services Offered</h2>
            <p className="mt-4 text-gray-500 font-sen">
            Elevate your space to new heights with our unparalleled cleaning solutions, where pristine cleanliness converges with absolute perfection.
            </p>

            <p className="mt-4 text-gray-500 font-sen">
            We offer a wide range of services tailored for both individuals and businesses. Customize your cleaning experience by selecting the number of rooms to be cleaned, the frequency of cleaning, as well as the date and time. The power to personalize is entirely in your hands.
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-orelega text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500 font-sen">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
    
            <img
              src='/assets/Services/imagem1.png'
              alt="Image about services"
              className="rounded-lg bg-gray-100 w-full h-full"
            />
            <img
              src='/assets/Services/imagem2.png'
              alt="Image about services"
              className="rounded-lg bg-gray-100 w-full h-full"
            />
            <img
              src='/assets/Services/imagem4.png'
              alt="Image about services"
              className="rounded-lg bg-gray-100 w-full h-full"
            />
            <img
              src='/assets/Services/imagem5.png'
              alt="Image about services"
              className="rounded-lg bg-gray-100 w-full h-full"
            />
            <img
              src='/assets/Services/imagem6.png'
              alt="Image about services"
              className="rounded-lg bg-gray-100 w-full h-full"
            />
            <img
              src='/assets/Services/imagem7.png'
              alt="Image about services"
              className="rounded-lg bg-gray-100 w-full h-full"
            />
            <img
              src='/assets/Services/imagem9.png'
              alt="Image about services"
              className="rounded-lg bg-gray-100 w-full h-full"
            />
            <img
              src='/assets/Services/imagem10.png'
              alt="Image about services"
              className="rounded-lg bg-gray-100 w-full h-full"
            />

          </div>
        </div>
      </div>
    )
  }