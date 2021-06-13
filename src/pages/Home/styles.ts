import styled from 'styled-components/macro'

import { pxToRem } from 'helpers'

export const HomePageSection = styled.section`
  box-sizing: border-box;
  height: 100vh;
  padding: ${pxToRem(168)} ${pxToRem(48)} ${pxToRem(48)} ${pxToRem(48)};
  @media ${({ theme }): string => theme.device.tablet} {
    padding 0;
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

export const StyledP = styled.p`
  font-size: calc(18px + (800vw - 2560px) / 1120);
  margin-bottom: ${pxToRem(32)};
  line-height: 1.6em;
`

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const StyledLink = styled.a`
  cursor: pointer;
  font-weight: 500;
  letter-spacing: ${pxToRem(1.28)};
  text-transform: uppercase;
  color: ${({ theme }): string => theme.paletteDefault};
  margin-right: ${pxToRem(24)};
  &:hover {
    padding-bottom: ${pxToRem(8)};
    border-bottom: ${pxToRem(2)} solid ${({ theme }): string => theme.paletteDefault};
  }
  @media ${({ theme }): string => theme.device.tablet} {
    font-size: ${pxToRem(14)};
  }
`
