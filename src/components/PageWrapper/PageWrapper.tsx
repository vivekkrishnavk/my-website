import React, { useState } from 'react'

import { Sidebar } from 'components/Sidebar/Sidebar'
import { SidebarNavLinks } from 'components/Sidebar/SidebarNavLinks'
import { Wrapper, StyledMain, MobileTopNav, MobileNavUL, MiddleNav, MobileNavLinks } from './styles'

export const PageWrapper = ({ children }: { children: JSX.Element }): JSX.Element => {
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
          <SidebarNavLinks />
        </MobileNavLinks>
      ) : (
        <>
          <Sidebar />
          <StyledMain>{children}</StyledMain>
        </>
      )}
    </Wrapper>
  )
}
