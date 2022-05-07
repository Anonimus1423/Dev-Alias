import React, { useState } from 'react'
import styled from 'styled-components'
import { SettingPage } from './settings-page/setting-page';
import { StartPage } from './start-page/start-page';

const StyledRouter = styled.div`
    
`

export const Router: React.FC = () => 
{
  const [page, setPage] = useState<number>(0)
  return (
    <StyledRouter>
        <StartPage setPage={setPage} page={page} />
        <SettingPage setPage={setPage} page={page} />
    </StyledRouter>
  )
}
