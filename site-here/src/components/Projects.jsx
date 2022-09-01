



import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const Projects = () => {
  return (
    <div >
      <Tabs>
        <TabList className='flex items-center justify-center'>
          <Tab className='px-5 py-1 mx-1 border-b-2 dark:border-gray-700 border-rose-400 text-rose-400'>Website Design</Tab>
          <Tab className='px-5 py-1 mx-1 border-b-2 dark:border-gray-700'>Mobile</Tab>
          <Tab className='px-5 py-1 mx-1 border-b-2 dark:border-gray-700'>E-Commerce</Tab>
          <Tab className='px-5 py-1 mx-1 border-b-2 dark:border-gray-700'>Desktop</Tab>
        </TabList>

        <TabPanel>
        <section className="py-6 ">
            <div className="container flex flex-col justify-center p-4 mx-auto">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                <img className="object-cover w-full  aspect-square" src="https://source.unsplash.com/random/300x300/?1" />
                <img className="object-cover w-full  aspect-square" src="https://source.unsplash.com/random/300x300/?2" />
                
              </div>
            </div>
          </section>
        </TabPanel>
        <TabPanel>
          <section className="py-6 ">
            <div className="container flex flex-col justify-center p-4 mx-auto">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                <img className="object-cover w-full  aspect-square" src="https://source.unsplash.com/random/300x300/?1" />
                <img className="object-cover w-full  aspect-square" src="https://source.unsplash.com/random/300x300/?2" />
                <img className="object-cover w-full  aspect-square" src="https://source.unsplash.com/random/300x300/?3" />
                <img className="object-cover w-full  aspect-square" src="https://source.unsplash.com/random/300x300/?4" />
              </div>
            </div>
          </section>
        </TabPanel>
        <TabPanel>
        <section className="py-6 ">
            <div className="container flex flex-col justify-center p-4 mx-auto">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                
                <img className="object-cover w-full  aspect-square" src="https://source.unsplash.com/random/300x300/?3" />
                <img className="object-cover w-full  aspect-square" src="https://source.unsplash.com/random/300x300/?4" />
              </div>
            </div>
          </section>
        </TabPanel>
        <TabPanel>
        <section className="py-6 ">
            <div className="container flex flex-col justify-center p-4 mx-auto">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                <img className="object-cover w-full  aspect-square" src="https://source.unsplash.com/random/300x300/?1" />
                <img className="object-cover w-full  aspect-square" src="https://source.unsplash.com/random/300x300/?2" />
                <img className="object-cover w-full  aspect-square" src="https://source.unsplash.com/random/300x300/?3" />
                <img className="object-cover w-full  aspect-square" src="https://source.unsplash.com/random/300x300/?4" />
              </div>
            </div>
          </section>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Projects