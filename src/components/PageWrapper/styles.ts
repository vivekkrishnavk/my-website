import styled from 'styled-components/macro'

import { pxToRem } from 'helpers'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const StyledMain = styled.main`
  min-height: 100vh;
  margin-left: ${pxToRem(280)};
  padding: ${pxToRem(120)} ${pxToRem(48)} ${pxToRem(120)};
`
