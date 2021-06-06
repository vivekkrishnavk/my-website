import React from 'react'

import { StyledNav, StyledUL, StyledLink } from './styles'

const sidebarOptions = [
  {
    key: 1,
    label: 'Home',
    path: '/',
  },
  {
    key: 2,
    label: 'My Work',
    path: '/my-work',
  },
  {
    key: 3,
    label: 'Blogs',
    path: '/blogs',
  },
  {
    key: 4,
    label: 'Services',
    path: '/services',
  },
]

export const SidebarNavLinks = (): JSX.Element => {
  return (
    <StyledNav>
      <StyledUL>
        {sidebarOptions.map((option) => (
          <li>
            <StyledLink key={option.key}>{option.label}</StyledLink>
          </li>
        ))}
      </StyledUL>
    </StyledNav>
  )
}
