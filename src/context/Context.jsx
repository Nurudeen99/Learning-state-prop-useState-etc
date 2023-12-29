import { createContext } from "react"


const DarkMode = createContext()


const GlobalContext = ({children})=>{

    return (
        <DarkMode.Provider>
          {children}
        </DarkMode.Provider>
    )
}
export default GlobalContext
