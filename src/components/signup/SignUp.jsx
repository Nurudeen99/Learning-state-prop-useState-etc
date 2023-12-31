import { useContext, useState } from "react"
import Container from "../../container/Container"
import Button from "../../shared/button/Button"
import Input from "../../shared/input/Input"
import { Form } from "react-router-dom"
import { globalCountContext } from "../../context/Countcontext"

const SignUp = () => {

    const [firstname,setFirstName] = useState("")
    const handleSubmitFirstName = (e) => {
        e.preventDefault()
            setFirstName(e.target.value)
    }
    const [lastname,setlastName] = useState("")
    const handleSubmitLastName =(e) => {
        e.preventDefault()
        setlastName(e.target.value)
    }
    const [email,seteMail] = useState("")
    const handleSubmitEmail = (e) => {
        e.preventDefault()
        seteMail(e.target.value)
    }
    const [username,setuserName] = useState("")
    const handleSubmitUsername = (e) => {
        e.preventDefault()
        setuserName(e.target.value)
    }
    const [password,setpassWord] = useState("")
    const handleSubmitPassword = (e) => {
        e.preventDefault()
        setpassWord(e.target.value)
    }
    const [phone,setphone] = useState("+234 ")
    const handleSubmitPhone = (e) => {
        e.preventDefault()
        setphone(e.target.value)
    }
   
  const [submit,setSubmit] = useState(false)
  const handleSubmitForm = (e) => {
    e.preventDefault()
    setSubmit(true)
    alert("YOUR ACCOUNT HAS BEEN SUCCESFULLY CREATED!!!")
  }
 function submitting(e){
if(!lastname || !firstname || !email || !username || !password || !phone){
    e.preventDefault()
    alert("E never submit ooo...shey u no see say you never fill all fields???Abeg fill everything")
}else{
    e.preventDefault()
    alert("E dun submit,and we dun create your account...So Go sleep")
}
    
 }
//  const iWantToSee = useContext(globalCountContext)
  return (
    <Container>
    
    <div className="flex flex-col justify-center gap-[1rem] items-center text-center  text-xl" >
       <div className="text-xl-500 font-bold text-green-500"><h1>Create Your Account By Signing Up here</h1></div>
      <div className="bg-yellow-500 drop-shadow-[2rem] rounded-[2rem] p-[3rem]" >
       <Input text="FirstName" type="text" placeholder="Enter your FirstName" value={firstname} label=""  onChange={handleSubmitFirstName}/>
       <Input text="LastName" type="text" placeholder="Enter your LastName" value={lastname}  label="" onChange={handleSubmitLastName}/>
       <Input text="E-mail" type="text" placeholder="Create an e-mail" value={email}  label="" onChange={handleSubmitEmail}/>
       <Input text="Username" type="text" placeholder="Create a Username" value={username} label="" onChange={handleSubmitUsername}/>
       <Input text="Password" type="password" placeholder="Enter A Password" value={password}  label=""onChange={handleSubmitPassword}/>
       <Input text="Phone Number" type="phone" placeholder="Enter Your Phone" value={phone}  label="" onChange={handleSubmitPhone}/>
       
     </div> 
       <Button  text="SUBMIT" handleSubmit={submitting}/>
    </div>
    </Container>
   
  )
}
   


export default SignUp
