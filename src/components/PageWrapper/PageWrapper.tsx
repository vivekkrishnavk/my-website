/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'

import { Sidebar } from 'components/Sidebar/Sidebar'
import { SidebarNavLinks } from 'components/Sidebar/SidebarNavLinks'
import { Wrapper, StyledMain, MobileTopNav, MobileNavUL, MiddleNav, MobileNavLinks } from './styles'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const PageWrapper = (props: any): JSX.Element => {
  const [openMobileNav, setOpenMobileNav] = useState(false)
  return (
    <Wrapper>
      <MobileTopNav>
        <MobileNavUL>
          <li style={{ cursor: 'pointer' }} onClick={(): void => setOpenMobileNav(!openMobileNav)}>
            Menu
          </li>
          <MiddleNav>Vivek Krishna</MiddleNav>
          <li style={{ cursor: 'pointer' }}>Email</li>
        </MobileNavUL>
      </MobileTopNav>
      {openMobileNav ? (
        <MobileNavLinks>
          <SidebarNavLinks
            onSidebarClick={(selectedPage: string): void => props.onSidebarClick(selectedPage)}
            activePage={props.activePage}
          />
        </MobileNavLinks>
      ) : (
        <>
          <Sidebar
            onSidebarClick={(selectedPage: string): void => props.onSidebarClick(selectedPage)}
            activePage={props.activePage}
          />
          <StyledMain>{props.children}</StyledMain>
        </>
      )}
    </Wrapper>
  )
}
