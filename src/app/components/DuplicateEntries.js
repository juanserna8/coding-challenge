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
    <div className='page relative bg-brandGray mx-auto text-center py-[4rem]'>
        <h2 className='text-[2rem] font-bold text-brandYellow leading-[1.9rem]'>Duplicate Entries</h2>
        {duplicateRegisters ? (
            <div className='md:grid md:grid-cols-2 '>
                {duplicateRegisters.map((duplicate) => (
                <div key={duplicate.identifier} className=' mx-auto mt-[2rem] lg:mt-[3rem] flex items-center gap-[1rem]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[1.5rem] h-[1.5rem]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                    </svg>
                    <div className='flex gap-[0.5rem] text-[1.2rem] lg:text-[1.5rem] lg:text font-bold'>
                        <p>{duplicate.identifier.replace('-', ' ')}: </p>
                        <p>{duplicate.count} occurrences</p>
                    </div>
                </div>
            ))}
            </div>
        ): (
            <h3>Loading..</h3>
        )}
    </div>
  )
}
