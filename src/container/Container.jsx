import { useState } from "react";
import { FaToggleOn,FaToggleOff } from "react-icons/fa";
import { Link } from "react-router-dom";

const Container = ({children}) => {
    const [isDark,setisDark]= useState(false)

    const handleToggle=()=>{
        setisDark(!isDark)
    }
  return (
    <>
    <div className={`${isDark?"text-white bg-gray-700":"text-black bg-white"}`}>
        <nav className="text-xl bg-gray-300 font-bold flex justify-around  items-center drop-shadow-[2rem] rounded-[1rem] bg-white-300 h-[3rem] "  >
              <Link to="/">HOME</Link>
              <div className="flex justify-center gap-[1rem] ">
                <Link to="aboutus">About</Link>
                <h1>ContactUs</h1>
                <Link to="login">LogIn</Link>
                <Link to="signup">SignUp</Link>
                <div className="cursor-pointer " onClick={handleToggle}>
                
                 {isDark? <FaToggleOn /> : <FaToggleOff />}
                
                </div>
              </div>
       </nav>
       {children}
    </div>
   
    </>
    
  
  )
}

export default Container
