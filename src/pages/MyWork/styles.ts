import styled from 'styled-components/macro'

import { pxToRem } from 'helpers'

export const HomePageSection = styled.section`
  box-sizing: border-box;
  min-height: 100vh;
  padding: ${pxToRem(48)};
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

export const StyledHr = styled.hr`
  box-shadow: none;
  height: 0px;
  border-width: 0 0 2px;
  width: 30px;
  background: transparent;
  border-color: ${({ theme }): string => theme.navBackground};
  margin: 48px 0 48px;
`

export const ProductDescriptionDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 48px;
  @media ${({ theme }): string => theme.device.tablet} {
    flex-direction: column-reverse;
  }
`

export const StyledDiv = styled.div`
  flex: 0 0 66.6667%;
  padding-left: 30px;
`

export const ProductImage = styled.div`
width: 450px;
  @media ${({ theme }): string => theme.device.tablet} {
    width: 100%;
  }
  & > div {
    display: block;
    position: relative;
    overflow: hidden;
    height: auto;
    width: 100%;
    padding-top: 75%;
  }
  & > div > img {
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    max-width: 100%;
    max-height 100%;
  }
`

export const ProductDescription = styled.div`
  flex: 0 0 33.3333%;
`

export const ProductTitle = styled.h2`
  font-size: calc(18px + (8 * (100vw - 320px)) / 1120);
  line-height: 1.6em;
  font-family: Roboto;
  word-spacing: -0.04em;
  margin-bottom: 24px;
  & > a {
    border-style: solid;
    border-width: 0px 0px 2px;
    line-height: 1.4em;
    color: ${({ theme }): string => theme.paletteDefault};
    border-color: ${({ theme }): string => theme.paletteDefault};
  }
`

export const Description = styled.p`
  font-size: calc(15px + (3 * (100vw - 320px)) / 1120);
  line-height: 1.6em;
  margin-bottom: 32px;
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
