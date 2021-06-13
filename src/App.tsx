import React, { useState, useRef, useEffect } from 'react'
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useOnViewport(ref: any): boolean {
  console.log('ref: ', ref)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const observer = new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting))
  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current)
      return (): void => observer.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return isIntersecting
}

function getActivePage(isHomePageVisible: boolean, isMyWorkPageVisible: boolean): string {
  if (isHomePageVisible) {
    return 'home'
  } else if (isMyWorkPageVisible) {
    return 'mywork'
  }
  return 'home'
}

function App(): JSX.Element {
  const [mode, setMode] = useState('dark')
  const homePageRef = useRef(null)
  const myWorkRef = useRef(null)
  const isHomePageVisible = useOnViewport(homePageRef)
  const isMyWorkPageVisible = useOnViewport(myWorkRef)
  console.log('isHomePageVisible: ', isHomePageVisible, isMyWorkPageVisible)
  const activePage = getActivePage(isHomePageVisible, isMyWorkPageVisible)
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
      <PageWrapper activePage={activePage}>
        <>
          <Home ref={homePageRef} />
          <MyWork ref={myWorkRef} />
        </>
      </PageWrapper>
    </ThemeProvider>
  )
}

export default App
