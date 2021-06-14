import styled from 'styled-components/macro'

export const Toggler = styled.div`
  position: fixed;
  z-index: 200;
  top: 0;
  right: 0;
  margin: 20px;
  cursor: pointer;
  @media ${({ theme }): string => theme.device.tablet} {
    margin-top: 80px;
  }
`

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  text-align: center;
  & > p > a {
    direction: rtl;
    unicode-bidi: bidi-override;
    cursor: pointer;
    line-height: 1.4em;
    color: ${({ theme }): string => theme.paletteDefault};
  }
  & > h1 {
    font-size: 18px;
    color: ${({ theme }): string => theme.paletteDefault};
  }
`

export const FooterWrapper = styled.div`
  display: none;
  @media ${({ theme }): string => theme.device.tablet} {
    display: block;
    height: 30vh;
    padding: 48px 0 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
