'use client'
import React, { useEffect, useState } from 'react'
import { calculateMostPopularProduct, determineKindOfProducts } from '../services/calculateMostPopularProduct'

export default function MostPopularProduct({data}) {
  
  // Variables
  const [commonProducts, setCommonProducts] = useState()
  const [bestSeller, setBestSeller] = useState()

    useEffect(() => {
        const kindOfProducts = () => {
          const res = determineKindOfProducts(data)
          setCommonProducts(res)
          // console.log(commonProducts)
        }

        kindOfProducts()
    }, [data])

    useEffect(() => {
      const popularProduct = () => {
        const res = calculateMostPopularProduct(commonProducts)
        setBestSeller(res)
      }

      popularProduct()

    }, [commonProducts])
  
    return (
    <div>
      <h2>Most popular product:</h2>
      <p>{bestSeller?.mostPopularProduct} with {bestSeller?.itemsSold} units sold</p>
    </div>
  )
}
