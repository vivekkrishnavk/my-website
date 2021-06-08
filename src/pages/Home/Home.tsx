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
// function useOnViewport(ref: any): boolean {
//   const [isIntersecting, setIsIntersecting] = useState(false)
//   const observer = new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting))
//   useEffect(() => {
//     observer.observe(ref.current)
//     return (): void => {
//       observer.disconnect()
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])
//   return isIntersecting
// }

export const Home = (): JSX.Element => {
  // const homePageSectionRef = useRef(null)
  // const isHomePageVisible = useOnViewport(homePageSectionRef)
  // console.log(isHomePageVisible)
  return (
    <HomePageSection>
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
}
