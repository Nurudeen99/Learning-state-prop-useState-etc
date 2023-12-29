
const Button = ({text,handleSubmit,...props}) => {
  return (
<button onClick={handleSubmit}  className="py-[0.5rem] px-[1rem] bg-blue-500 text-white rounded-[1rem]">{text}</button>
    )
}

export default Button
