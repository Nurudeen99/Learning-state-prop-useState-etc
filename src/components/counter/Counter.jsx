import { useContext, useState } from "react"
import Container from "../../container/Container"
import { globalCountContext, globalDecrementContext, globalDefault, globalIncrementContext, globalMultiplication, globalMultiply, globalSetCountContext, globalSetMultiply  } from "../../context/Countcontext"

const Counter = () => {
    const countIt = useContext(globalCountContext)
    const increaseIt = useContext(globalIncrementContext)
    const decreaseIt = useContext(globalDecrementContext)
    const multiplyIt = useContext(globalMultiplication)
    const multiplyNow = useContext(globalMultiply)
    const resetToDefault = useContext(globalDefault)

  return (
   <Container>
  <>
  <div className="gap-[1rem] flex justify-center p-[5rem] text-center">
    <button className="py-[0.5rem] px-[1rem] bg-green-500 text-white rounded-[1rem]" onClick={increaseIt}>INCRESEA</button>
    <p className="font-bold text-xl ">{countIt}</p>
    <button className="py-[0.5rem] px-[1rem] bg-green-500 text-white rounded-[1rem]" onClick={decreaseIt}>DECRESEA</button>
  </div>

  <div className="gap-[1rem]  justify-center p-[5rem] text-center">
    <button className="py-[0.5rem] px-[1rem] bg-yellow-500 text-white rounded-[1rem]" onClick={multiplyIt}>Add by 100</button>
    <p className="font-bold text-xl ">{multiplyNow}</p>
    <button className="py-[0.5rem] px-[1rem] bg-red-500 text-white rounded-[1rem]" onClick={resetToDefault}>RESET TO DEFAULT</button>

  </div>
  </>
   </Container>
      
    
  
  )
}

export default Counter
