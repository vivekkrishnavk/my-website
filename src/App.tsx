import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components/macro'

import { darkTheme, lightTheme } from './styles/theme'
import { GlobalStyles } from './styles/globalStyles'
import { Home } from 'pages/Home/Home'

function App(): JSX.Element {
  const [mode] = useState('light')
  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )
}

export default App
