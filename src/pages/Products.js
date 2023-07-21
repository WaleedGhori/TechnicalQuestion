import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Products = () => {

    const [showProd, setShowProd] = useState()
    const fetchData = async () => {
        let data = await fetch(`https://fakestoreapi.com/products`)
        let res = await data.json()
        setShowProd(res)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='flex flex-wrap md:ml-16 mt-8 mb-9 min-h-screen '>
            {showProd && showProd.map((item) => {
                return (
                    <> 
                        <div key={item.id} className="shadow-slate-300 shadow-sm bg-gray-50 justify-center text-center p-4 items-center w-1/4 m-2">
                            <img src={item.image} alt={item.title} className="md:h-[250px] h-[220px]"></img>
                            <h2 className='text-lg font-semibold'>{item.title.substring(0, 12)}...</h2>
                            <p className='font-bold mb-4'>${item.price}</p>
                            <p>{item.description.length < 20 ? <p>{item.description}</p> : <p>{item.description.substring(0, 120)}</p>}</p>
                            <NavLink to={`/products/${item.id}`}> See Details...</NavLink>
                        </div>
                    </>
                )   
            })
            }
        </div>

    )
}

export default Products