import React, { useRef, useState } from 'react'

const countries = [
    { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
    { name: "Pakistan", value: "PK", cities: ["Karachi", "Lahore"] },
    { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Dhaka1"] },
]

const arr = ["Waleed", "Ahmed", "Ghori"]

const App = () => {
    const [country, setCountry] = useState();
    const [copyArr, setCopyArr] = useState(arr);
    const [checkBoxValue, setCheckBoxValue] = useState(false);
    const [checkBoxIndex, setCheckBoxIndex] = useState();

    const handldeDelete = (Itemindex) => {
        let farr = copyArr
        let filterArray = farr.filter((item, index) => {
            return index !== Itemindex
        })
        setCopyArr(filterArray)
    }
    const handleCheckBox = (value , index) =>{
        setCheckBoxValue(!value)
        setCheckBoxIndex(index)
    }
    return (

        // ! Start of First Question
        // <div>
        //     <select onChange={(e)=>{
        //         // console.log(e.target.value);
        //         setCountry(e.target.value)
        //         console.log("Country",country);
        //     }}>
        //         {countries.map((item , index)=>{
        //             return(
        //                 <option value={index}>{item.name}</option>
        //             )
        //         })}
        //     </select>


        //  {/* Second drwopDown */}

        //    <select>
        //     {
        //         countries[country].cities.map((item , index)=>{
        //             return(
        //                 <option>{item}</option>
        //             )
        //         })
        //     }
        //    </select>
        // </div>
        // ! End of first Question 

        // ! Stat of Second Question
        <div>
            {
                copyArr.map((item, index) => {
                    return (
                        <ul>
                            <li>
                                <input onChange={(e)=>handleCheckBox(!e.target.value, index)}
                                    type="checkbox"
                                     />
                                {item}
                                {!checkBoxValue && !checkBoxIndex?<></>:(<button onClick={() => { handldeDelete(index) }} className='p-2 bg-slate-300'>Item Deleted</button>)}
                            </li>
                        </ul>
                    )

                })
            }
        </div>
    )
}

export default App