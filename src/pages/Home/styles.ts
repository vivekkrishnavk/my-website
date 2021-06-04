import styled from 'styled-components/macro'

import { pxToRem } from 'helpers'

export const StyledDiv = styled.div`
  padding: ${pxToRem(48)};
`

export const Greeting = styled.span`
  font-size: ${pxToRem(24)};
  display: block;
  letter-spacing: ${pxToRem(5.12)};
  text-transform: uppercase;
  color: ${({ theme }): string => theme.paletteDefault};
  font-weight: 500;
  margin-bottom: ${pxToRem(32)};
`

export const JobDescription = styled.span`
  line-height: ${pxToRem(22.4)};
  display: block;
  font-weight: 500;
  color: ${({ theme }): string => theme.paletteDefault};
  font-size: ${pxToRem(42)};
  line-height: ${pxToRem(56)};
  word-wrap: break-word;
`

export const StyledH1 = styled.h1`
  margin-bottom: ${pxToRem(32)};
`

export const StyledP = styled.p`
  font-size: ${pxToRem(32)};
  margin-bottom: ${pxToRem(32)};
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
  margin-right: ${pxToRem(16)};
  &:hover {
    padding-bottom: ${pxToRem(8)};
    border-bottom: ${pxToRem(2)} solid ${({ theme }): string => theme.paletteDefault};
  }
`
