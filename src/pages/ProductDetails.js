import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const [ prodDetail , setProdDetail] = useState() 
    
    const {id} = useParams();
    const fetcProdDetails = async() =>{
        let data = await fetch(`https://fakestoreapi.com/products/${id}`)
        let res  = await data.json()
        setProdDetail(res)
    }

    useEffect(() => {
      fetcProdDetails();
    }, [])
    
  return (
    <>
    <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded mb-32'>
            <img alt={prodDetail && prodDetail.title} className="lg:h-80 lg:w-80 md:h-72 md:w-72 h-96 w-96" src={prodDetail &&prodDetail.image} />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm font-semibold title-font text-slate-900  tracking-widest">ECOMMERCE</h2>
            <h1 className="text-orange-700 text-3xl title-font font-medium mb-1">{prodDetail && prodDetail.title}</h1>
            <div className="flex mb-4">

              <span className="flex ml-3 pl-3 py-2 border-l-2 border-slate-700 space-x-2s">
                <a className="text-slate-900">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="text-slate-900">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="text-slate-900">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed text-slate-900">{prodDetail && prodDetail.description}</p>
            <hr className='mt-4 mb-4 text-slate-700 h-1'></hr>

            <div className="flex">
              <span className="title-font font-medium text-2xl text-orange-700">${prodDetail && prodDetail.price}</span>
            </div>
          </div>
        </div>
      </div>
  </>
  )
}

export default ProductDetails