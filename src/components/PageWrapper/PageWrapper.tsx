/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'

import { Sidebar } from 'components/Sidebar/Sidebar'
import { SidebarNavLinks } from 'components/Sidebar/SidebarNavLinks'
import {
  Wrapper,
  StyledMain,
  MobileTopNav,
  MobileNavUL,
  MobileMenuBtn,
  MiddleNav,
  MobileNavLinks,
} from './styles'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const PageWrapper = (props: any): JSX.Element => {
  console.log('active page: ', props.activePage)
  const [openMobileNav, setOpenMobileNav] = useState(false)
  return (
    <Wrapper>
      <div>
        <MobileTopNav>
          <MobileNavUL>
            <div>
              <MobileMenuBtn
                style={{ cursor: 'pointer' }}
                onClick={(): void => setOpenMobileNav(!openMobileNav)}
                isActive={openMobileNav}
              >
                Menu
              </MobileMenuBtn>
              {openMobileNav && (
                <MobileNavLinks>
                  <SidebarNavLinks
                    onSidebarClick={(selectedPage: string): void => {
                      setOpenMobileNav(false)
                      props.onSidebarClick(selectedPage)
                    }}
                    activePage={props.activePage}
                  />
                </MobileNavLinks>
              )}
            </div>
            <MiddleNav>Vivek Krishna</MiddleNav>
            <li style={{ cursor: 'pointer' }}>Email</li>
          </MobileNavUL>
        </MobileTopNav>
      </div>
      <Sidebar
        onSidebarClick={(selectedPage: string): void => props.onSidebarClick(selectedPage)}
        activePage={props.activePage}
      />
      <StyledMain>{props.children}</StyledMain>
    </Wrapper>
  )
}
