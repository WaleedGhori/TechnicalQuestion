import React, { useState } from 'react'

const countries = [
    {name:"India", value:"IN", cities:["Delhi","Mumbai"]},
    {name:"Pakistan", value:"PK", cities:["Karachi","Lahore"]},
    {name:"Bangladesh", value:"BG", cities:["Dhaka","Dhaka1"]},
]

const App = () => {
    const [ country , setCountry] = useState();
  return (
    <div>
        <select onChange={(e)=>{
            // console.log(e.target.value);
            setCountry(e.target.value)
            console.log("Country",country);
        }}>
            {countries.map((item , index)=>{
                return(
                    <option value={index}>{item.name}</option>
                )
            })}
        </select>


        {/* Second drwopDown */}

       <select>
        {
            countries[country].cities.map((item , index)=>{
                return(
                    <option>{item}</option>
                )
            })
        }
       </select>
    </div>
  )
}

export default App