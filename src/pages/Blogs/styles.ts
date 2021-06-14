import styled from 'styled-components/macro'

import { pxToRem } from 'helpers'

export const HomePageSection = styled.section`
  box-sizing: border-box;
  min-height: 100vh;
  padding: ${pxToRem(48)};
  @media ${({ theme }): string => theme.device.tablet} {
    padding: 10rem 0 0 0;
  }
`

export const Greeting = styled.span`
  font-size: calc(14px + (2 * (100vw - 320px)) / 1120);
  display: block;
  letter-spacing: ${pxToRem(5.12)};
  text-transform: uppercase;
  color: ${({ theme }): string => theme.paletteDefault};
  font-weight: 500;
  margin-bottom: ${pxToRem(32)};
`

export const JobDescription = styled.span`
  display: block;
  font-weight: 500;
  color: ${({ theme }): string => theme.paletteDefault};
  font-size: calc(28px + (14 * (100vw - 320px)) / 1120);
  font-family: Roboto;
  word-wrap: break-word;
`

export const StyledH1 = styled.h1`
  margin-bottom: ${pxToRem(32)};
`

export const StyledH2 = styled.h2`
  font-size: 18px;
  line-height: 1.6em;
  display: block;
  font-family: 'Roboto Mono', monospace;
  font-weight: 500;
  letter-spacing: -0.04em;
  display: flex;
  justify-content: space-between;
  @media ${({ theme }): string => theme.device.tablet} {
    display: block;
  }
`

export const BlogName = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }): string => theme.paletteDefault};
`

export const StyledP = styled.p`
  font-size: calc(18px + (800vw - 2560px) / 1120);
  margin-bottom: ${pxToRem(32)};
  line-height: 1.6em;
`

export const StyledHr = styled.hr`
  box-shadow: none;
  height: 0px;
  border-width: 0 0 2px;
  width: 30px;
  background: transparent;
  border-color: ${({ theme }): string => theme.navBackground};
  margin: 48px 0 48px;
`

export const BlogItemWrapper = styled.div`
  padding: 15px 0;
  border-bottom: 2px solid ${({ theme }): string => theme.navBackground};
  margin-bottom: 6px;
  @media ${({ theme }): string => theme.device.tablet} {
    border: 0;
    text-align: center;
  }
`

export const ArticleDate = styled.span`
  @media ${({ theme }): string => theme.device.tablet} {
    padding-top: 10px;
    display: block;
  }
`
