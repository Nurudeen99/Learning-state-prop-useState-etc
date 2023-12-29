import { useState } from "react";
import { FaToggleOn,FaToggleOff } from "react-icons/fa";


const Navbar = () => {
const [isDark , setisDark] = useState(false)
const handleToggle =()=>{
    setisDark((dark)=>(!dark))
}

  return (
    <>
        <nav className={ `text-xl font-bold flex justify-around  items-center drop-shadow-[2rem] rounded-[1rem] bg-gray-300 h-[3rem] ${isDark? "text-white bg-gray-[400]":"text-gray-[400] bg-white"} `} >
              <div>HOME</div>
              <div className="flex justify-center gap-[1rem] ">
                <h1>About</h1>
                <h1>Contact Us</h1>
                <h1>Log In</h1>
                <div className="cursor-pointer " onClick={handleToggle}>
                
                {isDark? <FaToggleOn /> : <FaToggleOff />}
                
                </div>
              </div>
       </nav>
    </>

  )
}

export default Navbar
