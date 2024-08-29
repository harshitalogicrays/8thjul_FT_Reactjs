import React, { useState } from 'react'

export const ThemeContext = React.createContext()

const Theme = ({children}) => {
    const [themeMode,setThemeMode]=useState("light")
    let darkTheme = ()=>setThemeMode("dark")
    let lightTheme = ()=>setThemeMode("light")

    const themeStyles = {
        backgroundColor:themeMode=="light"? "#fff":"#666",
        color:themeMode=="light" ? "#000" : "#fff",
        height:'100%',
        transition:'all 0.3s ease'
    }
  return (
    <ThemeContext.Provider value={{themeMode,darkTheme,lightTheme}}>
      <div style={themeStyles}>{children}</div>
    </ThemeContext.Provider>
  )
}

export default Theme
