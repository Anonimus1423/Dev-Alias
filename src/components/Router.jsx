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
import ThankYou from './thank-you/ThankYou';

const StyledRouter = styled.div`
    
`;

export const Router = () => 
{
  const [page, setPage] = useState(0);
  const [prevPage, setPrevPage] = useState(page || 0);
  const [WictoryTeamName, setWictoryTeamName] = useState('');
  const [FinishTeams, setFinishTeams] = useState([]);

  const dispatch = useDispatch()
  useEffect(()=>{
    let PrevGame = JSON.parse(localStorage.getItem('game')) || {teams:[]}
    if(PrevGame.teams.teams){
      dispatch(localSet(PrevGame.teams.teams))
      dispatch(changePoint(PrevGame.point.points))
      dispatch(changeTime(PrevGame.time.time))
      dispatch(setActiveIndex(PrevGame.index))
      setPage(2)
    }
  },[])
  const SetAutoPage = (e,TeamName,teams) => {
    setPrevPage(page)
    setPage(e)
    if(e === 4){
      setWictoryTeamName(TeamName)
      setFinishTeams(teams)
    }
  }
  const SetAutoPrevPage = () => {
    setPage(prevPage)
  }
  return (
    <StyledRouter>
      <StartPage  setPage={SetAutoPage} page={page} />
      <SettingPage SetAutoPrevPage={SetAutoPrevPage} setPage={SetAutoPage} page={page} />
      <GamePage page={page} setPage={SetAutoPage}/>
      <ThankYou page={page} FinishTeams={FinishTeams} WictoryTeamName={WictoryTeamName} setPage={SetAutoPage}/>
    </StyledRouter>
  );
};
