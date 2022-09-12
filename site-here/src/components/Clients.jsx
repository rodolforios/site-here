import React from 'react'
import Pulse from 'react-reveal/Pulse';

const Clients = () => {
    return (
        <div>



            <section className="p-6 bg-gray-50 text-gray-700 mt-20 " id='clients'>

                <Pulse>
                    <div className="container p-4 mx-auto text-center">
                        <h2 className="text-4xl font-bold">Clientes que <span className='border-b-4 border-rose-600'>Confiam</span> na HereIT</h2>
                    </div>
                    <div className="container flex flex-wrap justify-center mx-auto text-gray-400">
                        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                            <img src="/logo scan do brasil.png" alt="" className='    h-14' />
                        </div>
                        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                            <img src="/logo-vbank.png" alt="" className='    h-14' />
                        </div>
                        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                            <img src="/logo midia.png" alt="" className='    h-14' />
                        </div>
                        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                            <img src="/logo estudio didatico.png" alt="" className='    h-14' />
                        </div>
                    </div>
                </Pulse>
            </section>



        </div>
    )
}

export default Clients
