import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

const countries = [
    { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
    { name: "Pakistan", value: "PK", cities: ["Karachi", "Lahore"] },
    { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Dhaka1"] },
]

const arr = ["Waleed", "Ahmed", "Ghori"]
const options = ["Cricket", "Football", "Hockey"]
const days = ["weekday", "weekend"]

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
    const handleCheckBox = (value, index) => {
        setCheckBoxValue(!value)
        setCheckBoxIndex(index)
    }

    // ? Logic of Third Question

    const [game, setGame] = useState()
    const [gameDay, setGameDay] = useState()

    const handleGame = (item) => {
        setGame(item)
        console.log(item);
    }
    const handleGameDay = (item) => {
        setGameDay(item)
        console.log(item);
    }


    // ? Logic of fourth Question

    const [color, setColor] = useState(false)
    const handleDarkColor = () => {
        setColor(true)
    }
    const handleLightColor = () => {
        setColor(false)
    }
    const darkColor = {
        "backgroundColor": "Black",
    }
    const lightColor = {
        "backgroundColor": "White"
    }
    return (

        // ? ********************************************************************************************************************************** //
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
        // ********************************************************************************************************************************** //

        // ? ********************************************************************************************************************************** //
        // ! Stat of Second Question

        // TODO we need to fix the checkbox button
        // <div>
        //     {
        //         copyArr.map((item, index) => {
        //             return (
        //                 <ul>
        //                     <li>
        //                         <input onChange={(e)=>handleCheckBox(!e.target.value, index)}
        //                             type="checkbox"
        //                              />
        //                         {item}
        //                         {!checkBoxValue && !checkBoxIndex?<></>:(<button onClick={() => { handldeDelete(index) }} className='p-2 bg-slate-300'>Item Deleted</button>)}
        //                     </li>
        //                 </ul>
        //             )

        //         })
        //     }
        // </div>

        // ! End of Second Question
        // ********************************************************************************************************************************** //

        // ? ********************************************************************************************************************************** //
        // ! Start of Third Question
        // <div>
        //     {options.map((item , index)=>{
        //         return(
        //             <>     
        //             <input type="radio" name="radioBtn" value={game} onClick={()=>{handleGame(item)}}/>
        //             <label>{item}</label>
        //             <br></br>
        //             </>
        //         )
        //     })}

        //     {days.map((item , index)=>{
        //         return(
        //             <>     
        //             <input type="radio" name="radioBtn1" value={gameDay} onClick={()=>{handleGameDay(item)}}/>
        //             <label>{item}</label>
        //             <br></br>
        //             </>
        //         )
        //     })}


        //     <h1>{game} and {gameDay}</h1>
        // </div>

        // ! End of Third Question
        // ********************************************************************************************************************************** //

        // ? ********************************************************************************************************************************** //
        // ! Start of Fourth Question
        // <div style={color == true ? darkColor : lightColor}>
        //     <button onClick={handleDarkColor} className='bg-gray-400 p-2 m-2 rounded-md' >Dark Mode</button>
        //     <button onClick={handleLightColor} className='bg-gray-400 p-2 m-2 rounded-md' >Light Mode</button>
        // </div>
        // ! End of fourth Question
        // ********************************************************************************************************************************** 


        // ? *************************************************************************************************************************************
        // ? *************************************************************************************************************************************
        <div className="">
        <BrowserRouter>
        <Routes>

          <Route path='/products' element={<Products/> }></Route>
          <Route path='/products/:id' element={<ProductDetails/>}></Route>
        </Routes>
        </BrowserRouter>
        </div>
    )

}

export default App