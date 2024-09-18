import React, { useContext, useState } from 'react'
const theme = React.createContext()
const ThemeContext = ({children}) => {
    const [themeMode,setThemeMode]=useState("light")
    let toggleTheme=()=>{
        setThemeMode((prev)=>(prev=="dark"?"light":"dark"))
    }

  return (
    <theme.Provider value={{themeMode,toggleTheme}}>
      <div className={`${themeMode=="dark" ? "bg-gray-600 text-white":
        "bg-white text-black"} min-h-screen transition-all duration-300`}>
        {children}
      </div>
    </theme.Provider>
  )
}

export default ThemeContext
export const useContextTheme = ()=>useContext(theme)