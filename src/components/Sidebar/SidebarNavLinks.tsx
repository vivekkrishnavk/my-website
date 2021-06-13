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

export const SidebarNavLinks = (props: { activePage: string }): JSX.Element => {
  return (
    <StyledNav>
      <StyledUL>
        {sidebarOptions.map((option) => (
          <li>
            <StyledLink isActive={props.activePage === option.name} key={option.key}>
              {option.label}
            </StyledLink>
          </li>
        ))}
      </StyledUL>
    </StyledNav>
  )
}
