import React, { useState, useEffect } from 'react'

const News = () => {

  const [prod, setProd] = useState([])
  const [page, setPage] = useState(1)
  // const itemPerpage = 10
  const fetchDummyProd = async () => {
    const response = await fetch(`https://dummyjson.com/products?limit=100`)
    const data = await response.json();
    setProd(data.products)
    console.log(data);
  }
  useEffect(() => {
    fetchDummyProd()
  }, [])
const selectPageHandler =(select) =>{
  if (select>=1 && select<=prod.length/10 &&  select !== page)
  setPage(select)
} 
  return (
    <div className=''>
    <div className='flex flex-wrap justify-center'>
      {prod && prod.slice(page*10-10 , page*10).map((item) => {
        return (
          <div key={item.id} className='w-1/5 m-2 bg-slate-50 p-2 border-2 border-gray-100'>
            <h1>{item.title}</h1>
            <h2>{item.brand}</h2>
            <h2>${item.price}</h2>
            <h3>{item.percentage}</h3>
            <h3>{item.discountPercentage}</h3>
            <img src={item.thumbnail} alt={item.title} className="md:h-[250px] h-[220px]"></img>
            <p>{item.description}</p>
           </div>
        )
      })}
    </div>
    {prod.length>0 && <div className='flex justify-center p-2 mt-2'>
      <span className='py-4 px-5 border-2 border-gray-500 cursor-pointer' onClick={()=>selectPageHandler(page-1)}>◀</span>
      {[...Array(prod.length/10)].map((_ , index)=>{
        return <span style={{ backgroundColor: page === index + 1 ? 'gray' : 'white' }} key={index} onClick={()=>selectPageHandler(index+1)} className='py-4 px-5 border-2 border-gray-500 cursor-pointer'>{index+1}</span>
      })}
      <span style={{ opacity: page < prod.length ? "" : 0 }}  className={"py-4 px-5 border-2 border-gray-500 cursor-pointer"}onClick={()=>selectPageHandler(page+1)}>▶</span>
      </div>}
    </div>
  )
}

export default News