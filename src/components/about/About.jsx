import { Link } from "react-router-dom"
import Container from "../../container/Container"
import Button from "../../shared/button/Button"

const About = () => {
  return (
    <Container>
<div className=" justify-center text-center p-[1rem]">
     <div className="text-center text-xl font-bold pb-[1rem]">About Us</div>
     <div className="pb-[2rem]">
        <h1>Proudly an Upcoming developer inshaAllah</h1>
        <h2>Check below to go to a global count Context created </h2>
     </div>
     <Link to="/counter"><Button  text="Click To Count"/></Link>
     
</div>
   
    </Container>
    
  )
}

export default About
