import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
const News = () => {
const [prod , setProd ] = useState()

const fetchDummyProd = async() =>{
  let response  = await fetch(`https://dummyjson.com/products`)
  let res  = await response.json()
  setProd(res.products)
}
useEffect(()=>{
  fetchDummyProd()
},[])

return (
  <div className='flex flex-wrap justify-center'>
    {prod &&
      prod.map((item) => {
        // Prepare image objects for react-image-gallery
        const images = item.images.map((image, index) => ({
          original: image,
          thumbnail: image,
          originalAlt: `${item.title} - Image ${index + 1}`,
          thumbnailAlt: `${item.title} - Image ${index + 1}`,
        }));

        return (
          <div className='border-2 bg-gray-100 border-gray-300 w-1/5 m-8 p-2' key={item.id}>
            <h1>{item.title}</h1>
            <h2>{item.brand}</h2>
            <h3>{item.category}</h3>
            <h4>{item.price}</h4>
            <h4>{item.discountPercentage}</h4>
            {/* Use react-image-gallery to display all images */}
            <div className="md:h-[450px] h-[220px] m-2">
              <ImageGallery items={images} showPlayButton={false} />
            </div>
            <p className=''>{item.description}</p>
          </div>
        );
      })}
  </div>
);
    }
export default News 