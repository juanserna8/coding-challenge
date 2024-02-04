'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

// Services
import { getAllSampleRequests } from '../services/sampleRequests'
import { cleanData } from '../services/cleanData'

// Components
import StatesSamples from './StatesSamples'
import MostPopularProduct from './mostPopularProduct'
import FlavoursBreakdown from './FlavoursBreakdown'
import SamplesperDay from './SamplesperDay'
import DuplicateEntries from './DuplicateEntries'

// Assets
import Hero from '../assets/hero-bg.jpg'
import Image from 'next/image'
import Introduction from './Introduction'

export default function Dashboard() {

    // Variables
    const [data, setData] = useState([])
    const [dataCleaned, setDataCleaned] = useState([])
    const [error, setError] = useState()

    // Use effect hooks
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Retrieve data from local storage if there is any
                const storedDataString = localStorage.getItem('sampleData');

                if(!storedDataString) {
                    // Fetch data from the API only if local storage is empty
                    const apiData = await getAllSampleRequests()
                    setData(apiData);
                    console.log('Fetched data from API: ', apiData)

                    // Store the fetched data in local storage
                    localStorage.setItem('sampleData', JSON.stringify(apiData))
                } else {
                    // Parse the JSON string back to an array and use the stored data
                    const storedData = JSON.parse(storedDataString);
                    setData(storedData);
                    
                }
            } catch (error) {
                console.error('Error fetching or using data:', error);
                setError(error)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        const cleanRawData = async() => {
            // Clean the data stored in Local Storage
            const cleanedData = await cleanData(data)
            setDataCleaned(cleanedData)
        }
        
        cleanRawData()
    }, [data])
    
   
    return (
    <section className='w-full mx-auto '>

        {data.length > 0 ? (
            <div className='md:mx-auto relative'>
                
                {/* Hero image */}
                <div className='absolute w-full -z-10 opacity-80 h-[31.5rem] '>
                    <Image src={Hero} className='w-full h-full object-cover' title='Hero background image' alt='Woman doing weight lifting' />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-100 opacity-80 " aria-hidden="true"></div>
                </div>

                <Introduction />
                <MostPopularProduct data={dataCleaned} />
                <SamplesperDay data={dataCleaned} />
                <StatesSamples data={dataCleaned} />
                <FlavoursBreakdown data={dataCleaned} />
                <DuplicateEntries data={dataCleaned} />

            </div>
        ) : 
            <div className=' page w-full sm:mx-auto h-screen py-[4rem] flex flex-col sm:justify-start gap-[3rem] items-center '>
                <h2 className=' text-brandYellow font-bold text-[1.5rem]'>Loading...</h2> 
                <p className='px-2 md:text-center'>If you are visiting this website for first time, please wait for 1 minute while the data is being processed</p>
                <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                />
                <div className='flex flex-col gap-[3rem]'>
                    <p>Meanwhile, we invite you to check our latest articles</p>
                    <Link href='https://www.bulknutrients.com.au/blog' target='_blank'>
                        <button className='bg-brandYellow py-2 w-full'>Go to blog</button>
                    </Link>
                </div> 
            </div>
        }

        {error && (
            {error}
        )}
                 
    </section>
  )

}
