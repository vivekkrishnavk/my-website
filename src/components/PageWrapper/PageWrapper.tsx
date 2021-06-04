import React from 'react'

import { Sidebar } from 'components/Sidebar/Sidebar'
import { StyledMain } from './styles'

export const PageWrapper = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <>
      <Sidebar />
      <StyledMain>{children}</StyledMain>
    </>
  )
}
