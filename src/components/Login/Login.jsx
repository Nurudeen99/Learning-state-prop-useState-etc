import { useState } from "react"
import Form from "../form/Form"
import Container from "../../container/Container"
import Button from "../../shared/button/Button"
import { Link } from "react-router-dom"
// import { Link } from "react-router-dom"

const Login = () => {
    const [Submitted,setSubmitted] = useState(false)
    const handleSubmit = (e) => {
      e.preventDefault()
      setSubmitted(true)
      alert("LOGGED IN SUCCESFULLY!!!")
    }

  return (
    <>
    <Container >
         <div className="py-[2rem] text-center text-xl font-bold">Login</div>
         <div><Form handleSubmit={handleSubmit}/></div>
         <div className="text-center font-bold pt-[2rem]">
            <h1>Not A User Yet?</h1>
           <Link to="signup"><Button text="Sign up here!!!"/></Link> 
         </div>
    </Container>
    
    </>
   
  )
}

export default Login
