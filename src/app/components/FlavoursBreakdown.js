import React, { useEffect, useState } from 'react'
import { breakDownFlavoursByKind } from '../services/breakDownFlavoursByKind'

export default function FlavoursBreakdown({data}) {
  
    // Variables
    const [flavoursByKind, setFlavoursByKind] = useState()

    // Hooks
    useEffect(() => {
        const kindOfProducts = async () => {
            const res = await breakDownFlavoursByKind(data)
            setFlavoursByKind(res)
        }

        kindOfProducts()
    }, [data])
  
  
    return (
    <div className='relative bg-brandGray mx-auto text-center py-[4rem]'>
        <h2 className='text-[2rem] font-bold text-brandYellow leading-[1.9rem]'>Samples Sent By Day of Week:</h2>
        {flavoursByKind ? (
            <div className='mt-[2rem] lg:w-2/3 lg:mx-auto lg:border lg:border-gray-400 '>
                {Object.entries(flavoursByKind).map(([kindOfProduct, flavors], index) => (
                    <div 
                        key={kindOfProduct} 
                        className={`py-[2rem] grid grid-cols-2 gap-[2rem] ${index % 2 !== 0 ? 'bg-brandYellow text-white' : 'bg-gray-200'}`}
                    >
                        <h3 className='font-bold text-[1.5rem] self-center'>{`${kindOfProduct}: `}</h3>
                        <p className='w-2/3 text-[1.2rem]'>{Array.from(flavors).join(', ')}</p>

                    </div>
                ))}
            </div>
        ) : (
            <h3 className='text-[2rem] font-bold text-brandYellow leading-[1.9rem]'>Loading...</h3>
        )}

        {/* Component divider */}
        <div className='absolute bottom-0 bg-gradient-to-l from-transparent via-gray-400 to-transparent p-[0.05rem] w-full '></div>
    </div>
  )
}


