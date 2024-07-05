import { useEffect, useState } from "react";

const useTheme = (initialTheme) =>{

    const[theme, setTheme] = useState(initialTheme);
    const handleClick = () => setTheme(theme === 'light'? 'dark': 'light')

    useEffect(()=>{
        document.body.setAttribute('data-theme', theme);
    }, [theme])

    return [theme, handleClick]
}

export default useTheme;