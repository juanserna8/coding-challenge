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
    <div>
        <h2>Samples per Day:</h2>
        {dayCounts ? (
            <ul>
                {Object.entries(dayCounts).map(([day, count]) => (
                    <li key={day}>
                        {day === 'total' ? 'Total': day}: {count} samples sent
                    </li>
                ))}
            </ul>
        ) : (
            <h2>Loading</h2>
        )}
    </div>
  )
}
