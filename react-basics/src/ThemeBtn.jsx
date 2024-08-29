import React, { useContext } from 'react'
import { ThemeContext } from './Theme'

const ThemeBtn = () => {
  const {themeMode,darkTheme,lightTheme}  = useContext(ThemeContext)
  const onChangeBtn=(e)=>{
    console.log(e)
      const darkStatus = e.target.checked
      if(darkStatus){darkTheme()}
      else {lightTheme()}
      }
  return (
    <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" onChange={onChangeBtn} 
  checked={themeMode =="dark"}/>
  </div>
  )
}

export default ThemeBtn
