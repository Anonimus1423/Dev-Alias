import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { changePoint } from '../store/reducers/point-reducer';
import { localSet } from '../store/reducers/team-reducer';
import { changeTime } from '../store/reducers/time-reducer';
import GamePage from './game-page/gamePage';
import { SettingPage } from './settings-page/setting-page';
import { StartPage } from './start-page/start-page';

const StyledRouter = styled.div`
    
`;

export const Router = () => 
{
  const [page, setPage] = useState(0);
  const dispatch = useDispatch()
  useEffect(()=>{
    let PrevGame = JSON.parse(localStorage.getItem('game')) || []
    if(PrevGame){
      dispatch(localSet(PrevGame?.teams?.teams))
      dispatch(changePoint(PrevGame?.point?.points))
      dispatch(changeTime(PrevGame?.time?.time))
      setPage(2)
    }
  },[])
  return (
    <StyledRouter>
      <StartPage setPage={setPage} page={page} />
      <SettingPage setPage={setPage} page={page} />
      <GamePage page={page} setPage={setPage}/>
    </StyledRouter>
  );
};
