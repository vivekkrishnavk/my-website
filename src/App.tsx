/* eslint-disable @typescript-eslint/no-explicit-any */
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

function useOnScreen(ref: any): boolean {
  const [isOnScreen, setIsOnScreen] = useState(false)
  const observer = new IntersectionObserver(([entry]) => setIsOnScreen(entry.isIntersecting), {
    threshold: 0.1,
  })
  useEffect(() => {
    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return (): void => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return isOnScreen
}

function App(): JSX.Element {
  const [mode, setMode] = useState('dark')
  const homePageRef = useRef<null | HTMLElement>(null)
  const myWorkRef = useRef<null | HTMLElement>(null)
  const isHomeInView = useOnScreen(homePageRef)
  const isMyWorkInView = useOnScreen(myWorkRef)

  const getActiveTab = (): string => {
    if (isHomeInView) {
      return 'home'
    } else if (isMyWorkInView) {
      return 'mywork'
    }
    return 'home'
  }
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
      <PageWrapper
        activePage={getActiveTab()}
        onSidebarClick={(selectedPage: string): void => {
          console.log('active page: ', selectedPage, homePageRef)
          if (selectedPage === 'home' && homePageRef) {
            homePageRef?.current?.scrollIntoView({
              behavior: 'smooth',
              block: 'end',
              inline: 'end',
            })
          } else if (selectedPage === 'mywork' && myWorkRef) {
            myWorkRef?.current?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'start',
            })
          }
        }}
      >
        <>
          <Home ref={homePageRef} className={'home'} />
          <MyWork ref={myWorkRef} className={'mywork'} />
        </>
      </PageWrapper>
    </ThemeProvider>
  )
}

export default App
