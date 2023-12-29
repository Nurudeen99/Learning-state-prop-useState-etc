import Card from "../../shared/card/Card"
import business from "../../assets/images/business (1).png"
import carSharing from "../../assets/images/car-sharing (1).png"
import delivery from "../../assets/images/delivery (1).png"
import food from "../../assets/images/food (1).png"
import micromobility from "../../assets/images/micromobility (1).png"
import rides from "../../assets/images/rides (1).png"
import Button from "../../shared/button/Button"
import Input from "../../shared/input/Input"
import { useState } from "react"
import Form from "../form/Form"
import Navbar from "../../shared/navbar/Navbar"
import Container from "../../container/Container"
import { Link } from "react-router-dom"





const Home = () => {
  const cardInfos = [
    {
      title:"RIDES",
      text:"Request in seconds, ride in minutes.",
      image:business
    },
    {
      title:"RIDES",
      text:"Request in seconds,drive in minutes",
      image:carSharing
    },
    {
      title:"RIDES",
      text:"Request in seconds,drive in minutes",
      image:delivery
    },
    {
      title:"RIDES",
      text:"Request in seconds,drive in minutes",
      image:food
    },
    {
      title:"RIDES",
      text:"Request in seconds,drive in minutes",
      image:micromobility
    },
    {
      title:"RIDES",
      text:"Request in seconds,drive in minutes",
      image:rides
    },
    
  ]
  const [Submitted,setSubmitted] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    alert("Submitted Successfully")
  }
  return (
    <Container>
   <div>
    

   <div className="grid grid-cols-3 p-[2rem] gap-[2rem]">
    {cardInfos.map((eachCard,i)=>{
      return <Card key={i} {...eachCard} />
    })}
   </div>
   <div className="flex justify-center gap-[2rem] text-center font-bold pt-[1rem] pb-[3rem]">
            <div>
              <h1>Not A User Yet?</h1>
           <Link to="signup"><Button text="Sign up here!!!"/></Link> 
           </div>
            <div>
              <h1>Log In</h1>
           <Link to="login"><Button text="Log In here!!!"/></Link>
             </div>
           
         </div>
      {/* <Form handleSubmit={handleSubmit}/> */}
   </div>
    </Container>
    
    
    
   
  )
}

export default Home
