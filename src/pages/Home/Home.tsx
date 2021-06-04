import React from 'react'

import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import {
  StyledDiv,
  Greeting,
  JobDescription,
  StyledP,
  ContactWrapper,
  StyledLink,
  StyledH1,
} from './styles'

export const Home = (): JSX.Element => {
  return (
    <PageWrapper>
      <StyledDiv>
        <StyledH1>
          <Greeting>Hi, I'm Vivek</Greeting>
          <JobDescription>I am a Full Stack Java and React Developer.</JobDescription>
        </StyledH1>
        <StyledP>
          I'm a frontend and backend developer with a broad range of skills from frontend UX Design
          to backend database design
        </StyledP>
        <ContactWrapper>
          <StyledLink>See My Work</StyledLink>
          <StyledLink href="mailto: vivekkrishnavk@gmail.com">Get In Touch</StyledLink>
        </ContactWrapper>
      </StyledDiv>
    </PageWrapper>
  )
}
