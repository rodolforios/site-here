import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from "react";



import React from 'react'
// import Modal from './Modal';

const Projects = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (

    <div className='mt-24' id='projects'>
      <h1 className=" px-4 mt-20 relative text-center mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">Projetos já feitos pela HereIT</h1>
      <p className="mb-6 px-4 text-lg relative text-center font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">Aqui você pode ver alguns de nossos projetos mais bem sucedidos.</p>

      <Tabs>
        <section className="bg-white ">
          <div className="container px-6 py-12 mx-auto">
            <h1 className="text-2xl font-semibold text-gray-800 lg:text-4xl ">Portfólio</h1>
            <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
              <div className="lg:mx-12">
                <h1 className="text-xl font-semibold text-gray-800 ">Tipo de Produto</h1>
                <TabList>
                  <div className="mt-4 space-y-4 lg:mt-8">
                    <Tab>
                      <button
                        className={toggleState === 1 ? "block text-gray-500 border border-b-2 border-transparent border-b-rose-600" : "block border-b-2 text-gray-500 border border-transparent"}
                        onClick={() => toggleTab(1)}>
                        Todos
                      </button>
                    </Tab>
                    <Tab>
                      <button
                        className={toggleState === 2 ? "block text-gray-500 border border-b-2 border-transparent border-b-rose-600" : "block border-b-2 text-gray-500 border border-transparent"}
                        onClick={() => toggleTab(2)}>
                        Website Design
                      </button>
                    </Tab>
                    <Tab>
                      <button
                        className={toggleState === 3 ? "block text-gray-500 border border-transparent border-b-2 border-b-rose-600" : "block border-b-2 text-gray-500 border border-transparent"}
                        onClick={() => toggleTab(3)}>
                        Mobile
                      </button>
                    </Tab>
                    <Tab >
                      <button
                        className={toggleState === 4 ? "block text-gray-500 border border-transparent border-b-2 border-b-rose-600" : "block border-b-2 text-gray-500 border border-transparent"}
                        onClick={() => toggleTab(4)}>
                        E-Commerce
                      </button>
                    </Tab>
                    <Tab>
                      <button
                        className={toggleState === 5 ? "block text-gray-500 border border-b-2 border-b-rose-600" : "block text-gray-500 border-b-2 border border-transparent"}
                        onClick={() => toggleTab(5)}>
                        Desktop
                      </button>
                    </Tab>
                  </div>
                </TabList>
              </div>
              <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
                {/* Conteúdo Todos */}
                <TabPanel>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
                    <div>
                      {/* <img className="object-cover w-full rounded-lg h-96  "
                        src="/mockup Scan do brasil.png"
                        alt="" /> */}



                      <div class="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                        style={{ backgroundImage: `url("/mockup Scan do brasil.png")` }}>
                        <div
                          class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">


                          {/* <Modal/>  */}




                        </div>
                      </div>


                      <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize ">Scan</h2>
                      <p className="mt-2 text-lg tracking-wider text-rose-500 uppercase  ">Website/Ecommerce</p>
                    </div>

                    <div>
                      <img className="object-cover w-full rounded-lg h-96 "
                        src="/Mockup Vbank.png"
                        alt="" />
                      <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize ">V Bank</h2>
                      <p className="mt-2 text-lg tracking-wider text-rose-500 uppercase  ">Aplicativo</p>
                    </div>
                    <div>
                      <img className="object-cover w-full rounded-lg h-96 "
                        src="/Mockup wise home.png"
                        alt="" />
                      <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize ">Wise Home</h2>
                      <p className="mt-2 text-lg tracking-wider text-rose-500 uppercase  ">Aplicativo</p>
                    </div>
                    <div>
                      <img className="object-cover w-full rounded-lg h-96 "
                        src="/mockup midia na tv.png"
                        alt="" />
                      <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize ">Midia na TV</h2>
                      <p className="mt-2 text-lg tracking-wider text-rose-500 uppercase  ">Aplicativo</p>
                    </div>
                    <div>
                      <img className="object-cover w-full rounded-lg h-96 "
                        src="Mockup Loígico.png"
                        alt="" />
                      <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize ">Estudio didático</h2>
                      <p className="mt-2 text-lg tracking-wider text-rose-500 uppercase  ">Aplicativo</p>
                    </div>
                    <div>
                      <img className="object-cover w-full rounded-lg h-96 "
                        src="/mockup Scan do brasil.png"
                        alt="" />
                      <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize ">Scan</h2>
                      <p className="mt-2 text-lg tracking-wider text-rose-500 uppercase  ">Website/Ecommerce</p>
                    </div>

                  </div>


                </TabPanel>

                {/* Conteúdo web */}
                <TabPanel>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
                    <div>
                      <img className="object-cover w-full rounded-lg h-96 "
                        src="/mockup Scan do brasil.png"
                        alt="" />
                      <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize ">Scan</h2>
                      <p className="mt-2 text-lg tracking-wider text-rose-500 uppercase  ">Website/Ecommerce</p>
                    </div>


                  </div>


                </TabPanel>

                {/* Conteúdo Mobile */}
                <TabPanel>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
                    <div>
                      <img className="object-cover w-full rounded-lg h-96 "
                        src="/Mockup Vbank.png"
                        alt="" />
                      <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize ">V Bank</h2>
                      <p className="mt-2 text-lg tracking-wider text-rose-500 uppercase  ">Aplicativo</p>
                    </div>
                    <div>
                      <img className="object-cover w-full rounded-lg h-96 "
                        src="/Mockup wise home.png"
                        alt="" />
                      <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize ">Wise Home</h2>
                      <p className="mt-2 text-lg tracking-wider text-rose-500 uppercase  ">Aplicativo</p>
                    </div>
                    <div>
                      <img className="object-cover w-full rounded-lg h-96 "
                        src="/mockup midia na tv.png"
                        alt="" />
                      <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize ">Midia na TV</h2>
                      <p className="mt-2 text-lg tracking-wider text-rose-500 uppercase  ">Aplicativo</p>
                    </div>
                    <div>
                      <img className="object-cover w-full rounded-lg h-96 "
                        src="Mockup Loígico.png"
                        alt="" />
                      <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize ">Estudio didático</h2>
                      <p className="mt-2 text-lg tracking-wider text-rose-500 uppercase  ">Aplicativo</p>
                    </div>

                  </div>






                </TabPanel>
                {/* Conteúdo Ecommerce */}
                <TabPanel>

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
                    <div>
                      <img className="object-cover w-full rounded-lg h-96 "
                        src="/mockup Scan do brasil.png"
                        alt="" />
                      <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize ">Scan</h2>
                      <p className="mt-2 text-lg tracking-wider text-rose-500 uppercase  ">Website/Ecommerce</p>
                    </div>


                  </div>

                </TabPanel>
                {/* Conteúdo Desktop */}
                <TabPanel>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
                    <div>
                      <img className="object-cover w-full rounded-lg h-96 "
                        src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
                        alt="" />
                      <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize ">Best website
                        collections</h2>
                      <p className="mt-2 text-lg tracking-wider text-rose-500 uppercase  ">Website</p>
                    </div>
                    <div>
                      <img className="object-cover w-full rounded-lg h-96 "
                        src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                        alt="" />
                      <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize ">Block of Ui kit
                        collections</h2>
                      <p className="mt-2 text-lg tracking-wider text-rose-500 uppercase  ">Ui kit</p>
                    </div>

                  </div>
                </TabPanel>
              </div>
            </div>
          </div>
        </section >
      </Tabs >
    </div>
  )
}

export default Projects