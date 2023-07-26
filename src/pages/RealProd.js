import React, { useState  , useEffect} from 'react'

const RealProd = () => {
const [prod , setProd] = useState([]);
const [page , setPage] = useState(1)

    const fetchProd =async() =>{
        const response = await fetch(`https://dummyjson.com/products?limit=100`)
        const data =await response.json()
        setProd(data.products)
    }

    useEffect(() => {
      fetchProd()
    }, [])

    const selectPage = (select) =>{
    setPage(select)
    }
    
  return (
    <div>
       <div className='flex flex-wrap justify-center'>
        {prod && prod.slice(page*10-10 , page*10).map((item)=>{
            return(
                <div className='w-1/5 m-2 p-2 bg-slate-200' key={item.id}>
                    <h1>{item.title}</h1>
                    <img src={item.thumbnail} alt={item.title} className="md:h-[250px] h-[220px]"></img>
                    
                </div>
            )
        })}
       </div>

       <div className='flex justify-center my-2'>
        <span onClick={()=>selectPage(page-1)} className='border-2 border-gray-400 py-2 px-4 cursor-pointer'>◀</span>
        {[...Array(prod.length/10)].map((_,index)=>{
            return <span onClick={()=>selectPage(index+1)} style={{backgroundColor:page===index+1?'gray':'white'}} className='border-2 border-gray-400 py-2 px-4 cursor-pointer' key={index}>{index+1}</span>
        })}
        <span onClick={()=>selectPage(page+1)} className='border-2 border-gray-400 py-2 px-4 cursor-pointer'>▶</span>
       </div>
    </div>
  )
}

export default RealProd