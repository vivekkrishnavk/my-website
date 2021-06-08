import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components/macro'

import { darkTheme, lightTheme } from './styles/theme'
import { GlobalStyles } from './styles/globalStyles'
import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import { Home } from 'pages/Home/Home'
import { MyWork } from 'pages/MyWork/MyWork'
import Sun from 'assets/sun.svg'
import Moon from 'assets/moon.svg'

const Toggler = styled.div`
  position: fixed;
  z-index: 200;
  top: 0;
  right: 0;
  margin: 20px;
  cursor: pointer;
`

function App(): JSX.Element {
  const [mode, setMode] = useState('dark')
  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Toggler>
        {mode === 'light' ? (
          <img
            style={{ height: '30px' }}
            src={Moon}
            alt="moon"
            onClick={(): void => setMode('dark')}
          />
        ) : (
          <img
            style={{ height: '35px' }}
            src={Sun}
            alt="sun"
            onClick={(): void => setMode('light')}
          />
        )}
      </Toggler>
      <PageWrapper>
        <>
          <Home />
          <MyWork />
        </>
      </PageWrapper>
    </ThemeProvider>
  )
}

export default App
