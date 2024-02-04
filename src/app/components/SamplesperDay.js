import React, { useEffect, useState } from 'react'
import { countSamplesPerDay } from '../services/samplesPerDay'

export default function SamplesperDay({data}) {
    
    // Variables
    const [dayCounts, setDayCounts] = useState()

    // Hooks
    useEffect(() => {
        const kindOfProducts = async () => {
            const res = await countSamplesPerDay(data)
            setDayCounts(res)
        }

        kindOfProducts()
    }, [data])

    return (
    <div className='relative bg-brandGray mx-auto text-center py-[4rem]'>
        <h2 className='text-[2rem] font-bold text-brandYellow leading-[1.9rem]'>Samples Sent By Day of Week:</h2>
        {dayCounts ? (
            <ul className='mt-[2rem] md:px-[4rem] grid grid-cols-2 md:grid-cols-3 text-[1.2rem] gap-[1rem] md:gap-[2rem]'>
                {Object.entries(dayCounts).map(([day, count], index) => (
                    <li key={day} className={index === Object.entries(dayCounts).length - 1 ? 'col-span-2 md:col-span-3 mx-auto' : ''}>
                        <h3 className='text-[3rem] font-bold'>{count}</h3>
                        <h3 className='text-[1.5rem] text-gray-600'>{day === 'total' ? 'Total': day}</h3>
                        
                    </li>
                ))}
            </ul>
        ) : (
            <h2>Loading...</h2>
        )}

        {/* Component divider */}
        <div className='absolute bottom-0 bg-gradient-to-l from-transparent via-gray-400 to-transparent p-[0.05rem] w-full '></div>
    </div>
  )
}
