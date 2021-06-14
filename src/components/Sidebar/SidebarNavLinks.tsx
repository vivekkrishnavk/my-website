/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import { StyledNav, StyledUL, StyledLink } from './styles'

const sidebarOptions = [
  {
    key: 1,
    label: 'Home',
    path: '/',
    name: 'home',
  },
  {
    key: 2,
    label: 'My Work',
    path: '/my-work',
    name: 'mywork',
  },
  {
    key: 3,
    label: 'Blogs',
    path: '/blogs',
    name: 'blogs',
  },
  {
    key: 4,
    label: 'Services',
    path: '/services',
    name: 'services',
  },
]

export const SidebarNavLinks = (props: any): JSX.Element => {
  console.log('active page: ', props.activePage)
  return (
    <StyledNav>
      <StyledUL>
        {sidebarOptions.map((option) => (
          <li>
            <StyledLink
              isActive={props.activePage === option.name}
              key={option.name}
              onClick={(element: any): void => props.onSidebarClick(option.name)}
            >
              {option.label}
            </StyledLink>
          </li>
        ))}
      </StyledUL>
    </StyledNav>
  )
}
