import React from 'react'

import {
  HomePageSection,
  Greeting,
  JobDescription,
  StyledP,
  StyledH1,
  StyledH2,
  StyledHr,
  BlogItemWrapper,
  BlogName,
  ArticleDate,
} from './styles'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Blogs = React.forwardRef((props: any, ref: any): JSX.Element => {
  return (
    <HomePageSection className={props.className} ref={ref}>
      <StyledH1>
        <Greeting>Blogs</Greeting>
        <JobDescription>On Web Application Security Frameworks and JWTs</JobDescription>
      </StyledH1>
      <StyledP>
        I love REST, writing secure web applications and finding new ways to implement secure coding
        practises. I have written a couple of blogs about these concepts and I have also conducted a
        couple of sessions on REST architecture guidelines.
      </StyledP>
      <StyledHr />
      <BlogItemWrapper>
        <StyledH2>
          <BlogName
            href="https://www.slideshare.net/VivekKrishna34/a-deep-dive-into-restful-api-design-part-1"
            target="_blank"
          >
            A PPT about REST Architectural Guidelines
          </BlogName>
          <ArticleDate>Aug 2020</ArticleDate>
        </StyledH2>
      </BlogItemWrapper>
      <BlogItemWrapper>
        <StyledH2>
          <BlogName
            href="https://www.slideshare.net/VivekKrishna34/a-deep-dive-into-restful-api-design-part-2"
            target="_blank"
          >
            A PPT about RESTful Services
          </BlogName>
          <ArticleDate>Aug 2020</ArticleDate>
        </StyledH2>
      </BlogItemWrapper>
      <BlogItemWrapper>
        <StyledH2>
          <BlogName
            href="https://hackernoon.com/wtf-are-jwt-tokens-and-should-you-use-them-5o273ydv"
            target="_blank"
          >
            What are JWTs and Why Should You Use Them?
          </BlogName>
          <ArticleDate>Jun 2020</ArticleDate>
        </StyledH2>
      </BlogItemWrapper>
      <BlogItemWrapper>
        <StyledH2>
          <BlogName
            href="https://vivekkrishnavk.medium.com/using-jwts-as-http-only-cookies-with-react-js-a301991fdfa6"
            target="_blank"
          >
            Using JWTs as HTTPOnly Cookies with React.js
          </BlogName>
          <ArticleDate>Jun 2021</ArticleDate>
        </StyledH2>
      </BlogItemWrapper>
    </HomePageSection>
  )
})
