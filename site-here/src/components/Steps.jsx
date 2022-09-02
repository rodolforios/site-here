import React from 'react'

const Steps = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mt-20" id='steps'>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                <h2 className=" relative text-center max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="red"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="f51618fb-0edb-4bcb-b35a-ffc770941286"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#f51618fb-0edb-4bcb-b35a-ffc770941286)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">Veja</span>
                    </span>{' '}
                    a simplicidade do processo.
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Sem reinventar a roda, criamos os produtos mais completos e criativos.
                </p>
            </div>

            {/* Os icones começam aqui */}

            <div className="grid gap-8 row-gap-0 lg:grid-cols-4">

                {/* Passo 1 */}
                <div className="relative text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                        </svg>
                    </div>
                    <h6 className="mb-2 text-2xl font-extrabold">Passo 1: Ideia </h6>
                    <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                        Esta é a primeira etapa de qualquer projeto da HereIT. Nesta etapa nosso P.O mantém contato direto com o cliente para obter todas as informações necessárias para realizar o projeto de acordo com o que o cliente deseja.

                    </p>

                    <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                        <svg
                            className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <line
                                fill="none"
                                strokeMiterlimit="10"
                                x1="2"
                                y1="12"
                                x2="22"
                                y2="12"
                            />
                            <polyline
                                fill="none"
                                strokeMiterlimit="10"
                                points="15,5 22,12 15,19 "
                            />
                        </svg>
                    </div>
                </div>
                {/* Fim passo 1 */}

                {/* Inicio passo 2 */}
                <div className="relative text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
                        <svg viewBox="0 0 1024 1024" className="w-16 h-16" fill="#0f766e">
                            <path d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"></path>
                        </svg>
                    </div>
                    <h6 className="mb-2 text-2xl font-extrabold">Passo 2: Design: </h6>
                    <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                        Nesta etapa nossa equipe de design utiliza a metodologia design thinking para estruturar todas as funcionalidades juntamente com o P.O e desenhar todas as telas navegáveis para que o cliente veja como ficará o software, após a ideia de layout ter sido aprovada, é realizado testes de funcionalidades e navegação pelas telas.
                    </p>

                    <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                        <svg
                            className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <line
                                fill="none"
                                strokeMiterlimit="10"
                                x1="2"
                                y1="12"
                                x2="22"
                                y2="12"
                            />
                            <polyline
                                fill="none"
                                strokeMiterlimit="10"
                                points="15,5 22,12 15,19 "
                            />
                        </svg>
                    </div>
                </div>
                {/*Fim passo 2  */}

                {/*Inicio passo 3  */}
                <div className="relative text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="Purple" className="w-16 h-16">
                            <polygon points="388.632 393.82 495.823 255.94 388.684 118.178 363.424 137.822 455.288 255.944 363.368 374.18 388.632 393.82"></polygon>
                            <polygon points="148.579 374.181 56.712 255.999 148.629 137.823 123.371 118.177 16.177 255.993 123.314 393.819 148.579 374.181"></polygon>
                            <polygon points="330.529 16 297.559 16 178.441 496 211.412 496 330.529 16"></polygon>
                        </svg>
                    </div>
                    <h6 className="mb-2 text-2xl font-extrabold">Passo 3: Codificando</h6>
                    <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                        A etapa de código é onde todas as funcionalidades ganham vida. Reuniões semanais são feitas com o time de desenvolvimento para mostrar para o cliente as etapas concluídas.

                    </p>
                    <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                        <svg
                            className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <line
                                fill="none"
                                strokeMiterlimit="10"
                                x1="2"
                                y1="12"
                                x2="22"
                                y2="12"
                            />
                            <polyline
                                fill="none"
                                strokeMiterlimit="10"
                                points="15,5 22,12 15,19 "
                            />
                        </svg>
                    </div>

                </div>
                {/*Fim passo 3  */}


                {/*Inicio passo 4  */}
                <div className="relative text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
                        <svg viewBox="0 0 1024 1024" className="w-16 h-16" fill='#1e40af'>
                            <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
                        </svg>
                    </div>
                    <h6 className="mb-2 text-2xl font-extrabold">Passo 4: Deploy: </h6>
                    <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                        Nesta etapa nossa equipe de design utiliza a metodologia design thinking para estruturar todas as funcionalidades juntamente com o P.O e desenhar todas as telas navegáveis para que o cliente veja como ficará o software, após a ideia de layout ter sido aprovada, é realizado testes de funcionalidades e navegação pelas telas.
                    </p>
                </div>


            </div>


        </div>
    )
}

export default Steps