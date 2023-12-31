import { createContext, useContext } from "react"


export const DarkMode = createContext()
export const handleToggleDarkMode = createContext()

export function useDarkMode(){
  return useContext(DarkMode)
}
export function usehandleToggleDarkMode(){
  return useContext(handleToggleDarkMode)
}


const GlobalContext = ({children})=>{

    return (
        <DarkMode.Provider >
          <handleToggleDarkMode.Provider>
              {children}
          </handleToggleDarkMode.Provider>
        </DarkMode.Provider>
    )
}
export default GlobalContext
