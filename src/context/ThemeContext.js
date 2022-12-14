import { createContext, useState } from 'react'

export const themeContext = createContext()

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('theme-light')

  return (
    <themeContext.Provider value={{theme, setTheme}}>
        {children}
    </themeContext.Provider>
  )
}

export default ThemeProvider