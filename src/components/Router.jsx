import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const [prevRedux,setPrevRedux] = useState([])
  const state = useSelector(state=>state)
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
    }else if(e === 1){
      setPrevRedux(state)
    }else if(e === 2){
    }
  }
  const SetAutoPrevPage = () => {
    setPage(prevPage)
    dispatch(localSet(prevRedux.teams.teams))
    dispatch(changePoint(prevRedux.point.points))
    dispatch(changeTime(prevRedux.time.time))
    dispatch(setActiveIndex(prevRedux.index))
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
