import React from 'react'

import { Wrapper, StyledHeader, StyledFooter, StyledH1, StyledP } from './styles'
import { Separator } from 'components/Separator/Separator'
import { SidebarNavLinks } from './SidebarNavLinks'

export const Sidebar = (): JSX.Element => {
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
      <SidebarNavLinks />
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
