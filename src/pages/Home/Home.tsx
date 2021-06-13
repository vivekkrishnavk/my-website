import React from 'react'

import {
  HomePageSection,
  Greeting,
  JobDescription,
  StyledP,
  ContactWrapper,
  StyledLink,
  StyledH1,
} from './styles'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Home = React.forwardRef((props: any, ref: any): JSX.Element => {
  return (
    <HomePageSection ref={ref}>
      <StyledH1>
        <Greeting>Hi, I'm Vivek Krishna</Greeting>
        <JobDescription>I am a Full Stack Java and React Developer.</JobDescription>
      </StyledH1>
      <StyledP>
        I'm a frontend and backend developer with a broad range of skills from frontend UX Design to
        backend database design
      </StyledP>
      <ContactWrapper>
        <StyledLink>See My Work</StyledLink>
        <StyledLink href="mailto: vivekkrishnavk@gmail.com">Get In Touch</StyledLink>
      </ContactWrapper>
    </HomePageSection>
  )
})
