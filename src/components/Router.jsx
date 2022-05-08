import React, { useState } from 'react'
import styled from 'styled-components'
import GamePage from './game-page/gamePage';
import { SettingPage } from './settings-page/setting-page';
import { StartPage } from './start-page/start-page';

const StyledRouter = styled.div`
    
`

export const Router = () => 
{
  const [page, setPage] = useState(0)
  return (
    <StyledRouter>
      <StartPage setPage={setPage} page={page} />
      <SettingPage setPage={setPage} page={page} />
      <GamePage page={page} />
    </StyledRouter>
  )
}
