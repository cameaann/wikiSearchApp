import { useContext } from "react"
import { DarkModeContext } from "../DarkModeContext"

const useDarkMode = () =>{
   const context = useContext(DarkModeContext);
   if(!context){
    throw new Error('useDarMode must be used within a DarModeProvider')
   }
   return context;
}