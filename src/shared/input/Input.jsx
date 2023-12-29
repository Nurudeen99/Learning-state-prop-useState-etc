
const Input = ({text, ...props}) => {
  return (
    <form action="">
        <label htmlFor="">{text}</label>
        <input {...props} className=" flex py-[0.5rem] px-[0.5rem] w-[20rem] bg-gray-400 rounded-[1rem]"  />
    </form>
  )
}

export default Input
