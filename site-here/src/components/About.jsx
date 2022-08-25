import React from 'react'

const About = () => {
    return (
        <div>



            <div class="relative bg-white  p-4 mt-32 ">
                <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
                    <div class="lg:col-start-2 md:pl-20 mr-11">
                        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">Suba de patamar <span class="text-rose-600 ">com a Top #1</span>  em desenvolvimento!.</h1>
                        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Na Here trazemos ideias para a realidade, com soluções criativas, tecnologias mais recentes e ferramentas poderosas!</p>
                    </div>
                    <div class="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1 ">
                        <img src="/about.gif" alt="illustration" class="relative mx-auto  rounded w-auto" />
                    </div>
                </div>
            </div>




        </div>
    )
}

export default About