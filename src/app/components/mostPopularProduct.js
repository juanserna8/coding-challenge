'use client'
import React, { useEffect, useState } from 'react'

// Libraries
import Lottie, {LottieRefCurrentProps} from "lottie-react";

// Services
import { calculateMostPopularProduct, determineKindOfProducts } from '../services/calculateMostPopularProduct'

// Assets
import BestAnimation from '../assets/best-animation.json'

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
    <div className='relative bg-brandGray mx-auto text-center py-[4rem]'>
      <h2 className='text-[2rem] font-bold text-brandYellow leading-[1.9rem] '>The Most Popular Product</h2>
      <Lottie 
        className='mt-[2rem] mx-auto h-[5rem] w-[5rem]' 
        animationData={BestAnimation}
      />
      <p className='mt-[2rem] text-[1.2rem]'><strong>{bestSeller?.mostPopularProduct}</strong> with {bestSeller?.itemsSold} units sold</p>
      

      {/* Component divider */}
      <div className='absolute bottom-0 bg-gradient-to-l from-transparent via-gray-400 to-transparent p-[0.05rem] w-full '></div>
    </div>
  )
}
