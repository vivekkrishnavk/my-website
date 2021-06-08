import React from 'react'

import { HomePageSection, Greeting, JobDescription, StyledP, StyledH1 } from './styles'

export const MyWork = (): JSX.Element => {
  return (
    <HomePageSection>
      <StyledH1>
        <Greeting>My Work</Greeting>
        <JobDescription></JobDescription>
      </StyledH1>
      <StyledP>
        I'm a frontend and backend developer with a broad range of skills from frontend UX Design to
        backend database design
      </StyledP>
    </HomePageSection>
  )
}
