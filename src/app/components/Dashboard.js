'use client'

import React, { useState, useEffect } from 'react'

// Services
import { getAllSampleRequests } from '../services/sampleRequests'
import { cleanData } from '../services/cleanData'

// Components
import StatesSamples from './StatesSamples'
import MostPopularProduct from './mostPopularProduct'

export default function Dashboard() {

    // Variables
    const [data, setData] = useState([])
    const [dataCleaned, setDataCleaned] = useState([])

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
    <section>
           
        {dataCleaned && (
            <div>
                <StatesSamples data={dataCleaned} />
                <MostPopularProduct data={dataCleaned} />
            </div>
        )}
                 
    </section>
  )

}
