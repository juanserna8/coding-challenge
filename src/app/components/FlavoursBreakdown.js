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
    <div>
        {flavoursByKind ? (
            <div>
                {Object.entries(flavoursByKind).map(([kindOfProduct, flavors], index) => (
                    <div 
                        key={kindOfProduct} 
                        className={`mt-[2rem] grid grid-cols-2 gap-[2rem] ${index % 2 === 0 ? 'bg-gray-200' : 'bg-blue-200'}`}
                    >
                        <p>{`${kindOfProduct}: `}</p>
                        <p>{Array.from(flavors).join(', ')}</p>

                    </div>
                ))}
            </div>
        ) : (
            <h3>Loading...</h3>
        )}
    </div>
  )
}


