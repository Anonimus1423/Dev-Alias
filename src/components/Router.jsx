import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setActiveIndex } from '../store/reducers/active-index';
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
    let PrevGame = JSON.parse(localStorage.getItem('game')) || {teams:[]}
    if(PrevGame.teams.teams.length){
      dispatch(localSet(PrevGame.teams.teams))
      dispatch(changePoint(PrevGame.point.points))
      dispatch(changeTime(PrevGame.time.time))
      dispatch(setActiveIndex(PrevGame.index))
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
