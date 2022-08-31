

import React from 'react'

const WiseHome = () => {
    return (
        <div>

            <div className='flex items-center justify-center p-2'>
                <h1 className="mb-4 mt-8 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl text-gray-900">Participamos da <span className="underline underline-offset-3 decoration-8 decoration-orange-400 dark:decoration-orange-600">Wise Home</span></h1>
                
            </div>

            <section className="p-4 lg:p-8 b  text-gray-100">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="/wise_home_1.png" alt="" className="h-80  bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6  bg-gray-900">
                            
                            <h3 className="text-3xl font-bold">Shark Tank Brasil </h3>
                            <p className="my-6  text-gray-400">A Here IT teve participação no desenvolvimento do software da wise Home e em sua apresentação na quarta temporada do programa.</p>

                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src="/wise_home_2.png" alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6  bg-gray-900">
                            
                            <h3 className="text-3xl font-bold">Produto inovador</h3>
                            <p className="my-6  text-gray-400">Wise Home é uma placa de fácil instalação, com um software que permite transformar a casa em uma smart house .</p>

                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <iframe className='h-80  bg-gray-500 aspect-video ' src="https://www.youtube.com/embed/RU84tU0H_vY" title="Divididos entre TRÊS propostas! | Shark Tank Brasil" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        
                        <div className="flex flex-col justify-center flex-1 p-6  bg-gray-900">
                            
                            <h3 className="text-3xl font-bold">Veja a participação da Wise Home no programa</h3>
                            <p className="my-6  text-gray-400">Com certeza uma das participações mais memóraveis da temporada, recebendo 3 propostas.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WiseHome