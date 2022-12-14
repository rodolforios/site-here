import React from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll'




const About = () => {
    return (




        <div className="relative bg-white  p-4 mt-32 divide-x " id='about'>

            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
                <Fade top>
                    <div className="lg:col-start-2 md:pl-20 mr-11 ">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl px-4">Suba de patamar <span className="text-rose-600 ">com a Top #1</span>  em desenvolvimento!</h1>
                        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 px-4">Na Here trazemos ideias para a realidade, com soluções criativas, tecnologias mais recentes e ferramentas poderosas!</p>
                        <div className="flex items-center justify-center">
                            <Link
                                to="footer" spy={true} smooth={true} offset={50} duration={2500}
                                className="w-48 mt-12 shadow flex items-center justify-center cursor-pointer  px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 md:py-4 md:text-lg md:px-10"
                            >
                                Contato
                            </Link>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="mt-10 mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1 ">
                        <img src="/about.gif" alt="illustration" className="relative mx-auto px-3  rounded w-auto" />

                    </div>
                </Fade>
            </div>

        </div>





    )
}

export default About