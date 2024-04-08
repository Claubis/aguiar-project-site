'use client'
import React, { useState } from 'react';

export default function AboutServices() {

    // Array de URLs das imagens para o carrossel
    const images = [
        "/assets/AboutServices/imagem3.jpg",
        "/assets/AboutServices/imagem4.jpg",
        "/assets/AboutServices/imagem5.jpg",
        "/assets/AboutServices/imagem6.jpg",
        "/assets/AboutServices/imagem7.jpg",
        "/assets/AboutServices/imagem8.jpg",
        "/assets/AboutServices/imagem9.jpg",
        "/assets/AboutServices/imagem10.jpg",
    ];
    
    // Estado para controlar a imagem atualmente visível
    const [currentImage, setCurrentImage] = useState(0);

    // Função para avançar para a próxima imagem
    const nextImage = () => {
        setCurrentImage((prevCurrentImage) => (prevCurrentImage + 1) % images.length);
    };

    // Função para voltar para a imagem anterior
    const prevImage = () => {
        setCurrentImage((prevCurrentImage) => (prevCurrentImage - 1 + images.length) % images.length);
    };


    return(

            <div className="grid justify-center min-h-[70vh] bg-quarta">
                
                <div className="grid justify-start font-orelega text-6xl p-10 mt-20">
                    <h1>Sobre nossos serviços</h1>
                </div>

                <div className="relative flex items-center justify-center w-4/5 mx-auto">

                    <button onClick={prevImage} aria-label="Slide back" type="button" className="absolute left-0 z-30 p-2 ml-10 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2">
                        
                        <svg width="8" height="14" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white">
                            
                            <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            </path>

                        </svg>

                    </button>
            
                    <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8 overflow-hidden">
                        
                        <img src={images[currentImage]} className="object-cover object-center dark:bg-gray-500 h-96 aspect-square w-full" alt="Carousel" />

                    </div>

                    <button onClick={nextImage} aria-label="Slide forward" id="next" className="absolute right-0 z-30 p-2 mr-10 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 text-white">
                            
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white">
                                
                            <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                
                        </svg>
                    </button>
                </div>

                <div className="p-10 font-sen text-2xl mb-20">
                    <p>Here above are photos of the services performed, some of which showcase the before and after of the executed services.
                    The service was carried out with utmost quality, care, and attention to detail, exceeding expectations.</p>
                </div>

            </div>

    );
}