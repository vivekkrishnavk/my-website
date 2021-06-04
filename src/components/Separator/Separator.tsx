import React from 'react'
import styled from 'styled-components/macro'
import { pxToRem } from 'helpers'

const StyledHr = styled.hr`
  margin: ${pxToRem(12)} 0 ${pxToRem(12)};
  border: none;
`

export const Separator = (): JSX.Element => {
  return <StyledHr />
}
