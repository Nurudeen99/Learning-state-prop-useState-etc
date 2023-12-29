import Button from "../../shared/button/Button"
import Input from "../../shared/input/Input"

const Form = ({handleSubmit}) => {
  return (
    <>
<div className="flex flex-col justify-center pl-[30rem] gap-[1rem] drop-shadow-lg text-xl font-bold "> 
    <Input placeholder="Username" text="USERNAME" type="text" />
    <Input placeholder="PassWord" text="PASSWORD" type="password" />
     <div><Button handleSubmit={handleSubmit} text="SUBMIT"/></div>
</div>
    </>
  )
}

export default Form
