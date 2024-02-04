import React, { useEffect, useState } from 'react'
import { countDuplicateEntries } from '../services/countDuplicateEntries'

export default function DuplicateEntries({data}) {
  
    // Variables
    const [duplicateRegisters, setDuplicateRegisters] = useState()

    // Hooks
    useEffect(() => {
        const searchForDuplicates = async() => {
            const res = countDuplicateEntries(data)
            setDuplicateRegisters(res)
        }

        searchForDuplicates()
    }, [data])

    
  
    return (
    <div>
        <h2>Duplicate Entries</h2>
        {duplicateRegisters ? (
            duplicateRegisters.map((duplicate) => (
                <div key={duplicate.identifier} className='flex gap-[1rem]'>
                    <p>{duplicate.identifier.replace('-', ' ')}:</p>
                    <p>{duplicate.count} occurrences</p>
                </div>
            ))
        ): (
            <h3>Loading..</h3>
        )}
    </div>
  )
}
