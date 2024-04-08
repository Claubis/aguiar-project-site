import imagem from '../../../public/assets/AboutFeedback/imagem2.png'

export default function AboutFeedback() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8 ">
        <div className="relative isolate bg-primeira px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-6xl font-bold tracking-tight text-black uppercase">
              Avalie sua experiência</h2>
            <h3 className='mt-6 leading-8 font-sen'>Se você já nos visitou, não se esqueça de fazer sua avaliação.</h3>
              
            <p className="mt-6 text-lg leading-8 font-sen">
            Como foi sua experiência com nosso serviço? Seu feedback é essencial para nós, pois nos ajuda a aprimorar nossos produtos e serviços para atender melhor às suas preferências.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="/FormFeedback"
                className="rounded-md bg-[#B7D4DA] px-3.5 py-2.5 text-sm font-sen text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white w-[40%] flex justify-center"
              >
                Get started
              </a>
             
            </div>
          </div>
          
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-0  max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src={imagem.src}
              alt="Imagem do feedback"
              width={500}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  )
}