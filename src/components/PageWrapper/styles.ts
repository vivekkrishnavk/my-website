import styled from 'styled-components/macro'

import { pxToRem } from 'helpers'

export const Wrapper = styled.div`
  display: flex;
  @media ${({ theme }): string => theme.device.tablet} {
    flex-direction: column;
    flex: 0 0 100%;
  }
`

export const StyledMain = styled.main`
  min-height: 100vh;
  margin-left: ${pxToRem(280)};
  padding: 0 ${pxToRem(48)};
  @media ${({ theme }): string => theme.device.tablet} {
    margin-left: 0;
  }
`

export const MobileTopNav = styled.div`
  display: none;
  @media ${({ theme }): string => theme.device.tablet} {
    display: flex;
    background: ${({ theme }): string => theme.navBackground};
    z-index: 1;
    height: ${pxToRem(60)};
    position: sticky;
    top: 0;
  }
`

export const MobileNavUL = styled.ul`
  @media ${({ theme }): string => theme.device.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    width: 100%;
    padding: ${pxToRem(12)} ${pxToRem(32)};
    text-transform: uppercase;
    font-size: ${pxToRem(14)};
    font-weight: 500;
    letter-spacing: 1.1px;
    align-items: center;
  }
`

export const MiddleNav = styled.li`
  width: 80px;
  font-size: ${pxToRem(16)};
  font-weight: 500;
  color: ${({ theme }): string => theme.paletteDefault};
  text-align: center;
`

export const MobileNavLinks = styled.div`
  @media ${({ theme }): string => theme.device.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({ theme }): string => theme.navBackground};
    width: 100%;
    height: 100vh;
    z-index: 1;
  }
`
