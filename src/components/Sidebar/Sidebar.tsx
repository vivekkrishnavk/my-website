import React from 'react'

import {
  Wrapper,
  StyledHeader,
  StyledNav,
  StyledFooter,
  StyledH1,
  StyledP,
  StyledUL,
  StyledLink,
} from './styles'
import { Separator } from 'components/Separator/Separator'

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

export const Sidebar = (): JSX.Element => {
  console.log(sidebarOptions)
  return (
    <Wrapper>
      <StyledHeader>
        <a>
          <StyledH1>Vivek Krishna</StyledH1>
        </a>
        <Separator />
        <StyledP>Java Developer</StyledP>
        <StyledP>React Developer</StyledP>
        <StyledP>Full Stack Developer</StyledP>
      </StyledHeader>
      <StyledNav>
        <StyledUL>
          {sidebarOptions.map((option) => (
            <li>
              <StyledLink key={option.key}>
                {option.label}
              </StyledLink>
            </li>
          ))}
        </StyledUL>
      </StyledNav>
      <StyledFooter>
        <p>
          {`Like what you see? Send me an email and tell me about it `}
          <a href="mailto: vivekkrishnavk@gmail.com">{`moc.liamg@kvanhsirkkeviv`}</a>
          {'.'}
          <br />
          {`I ♥︎ emails.`}
        </p>
      </StyledFooter>
    </Wrapper>
  )
}
