import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

import { pxToRem } from 'helpers'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  top: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  width: ${pxToRem(280)};
  z-index: 200;
  background: ${({ theme }): string => theme.navBackground};
  padding: ${pxToRem(32)};
`

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  flex: 0 0 25%;
`

export const StyledH1 = styled.h1`
  font-family: 'Roboto';
  text-transform: uppercase;
  font-size: ${({ theme }): string => pxToRem(theme.fontSizes.large)};
  color: ${({ theme }): string => theme.paletteDefault};
  font-weight: 500;
  letter-spacing: ${pxToRem(1.6)};
`

export const StyledP = styled.p`
  font-size: ${pxToRem(14)};
  margin: ${pxToRem(4)} 0 ${pxToRem(4)};
`

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;
  justify-content: center;
`

export const StyledUL = styled.ul`
  list-style: none;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: ${pxToRem(1.6)};
  color: #838383;
  font-size: ${pxToRem(16)};
  & > li {
    height: ${pxToRem(48)};
  }
`

export const StyledLink = styled(NavLink)`
  padding-bottom: ${pxToRem(8)};
  &:hover {
    border-bottom: ${pxToRem(2)} solid ${({ theme }): string => theme.paletteDefault};
    color: ${({ theme }): string => theme.paletteDefault};
  }
`

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  flex: 0 0 25%;
  justify-content: flex-end;
  font-size: ${pxToRem(14)};
  & > p > a {
    direction: rtl;
    unicode-bidi: bidi-override;
    cursor: pointer;
    line-height: 1.4em;
    color: ${({ theme }): string => theme.paletteDefault};
  }
`
