import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { changePoint } from '../../../store/reducers/point-reducer'
import { RestartQuests } from '../../../store/reducers/quests-reducer'
import { localSet } from '../../../store/reducers/team-reducer'
import { changeTime } from '../../../store/reducers/time-reducer'
import { Alias } from './alias';
import { Timer } from './timer';

const StyledGame = styled.div` 
  transition: 0.4s;
  opacity: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1);
  &.back
  {
      transform: translate(-50%, -50%) scale(0.5);
      opacity: 0;
  }
  &.forward
  {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
  }
`
const TeamTitle = styled.h2`
  font-size: 34px;
  margin-bottom: 20px;
  font-weight: bold; 
  text-align:center;
  margin: 0px auto;
  max-width:50%;
  overflow-x:scroll;
  &&::-webkit-scrollbar {
      display: none;
    }
`

export const Game = ({ isGame,setIsGame,currentStartIndex,setCurrentStartIndex,setPage }) => {
  const thisActiveIndex = useSelector(state=>state.index);
  const team = useSelector(state => state.teams.teams[thisActiveIndex])
  const teams = useSelector(state => state.teams.teams)
  const maxPoints = useSelector(state => state.point.points)
  const className = !isGame ? "back" : "forward";
  const [wonScore,setWonScore] = useState(null)
  const dispatch = useDispatch()

  const closeAndDeleteLocal = () => {
    dispatch(localSet([]))
    dispatch(changePoint(120))
    dispatch(changeTime(60))
    dispatch(RestartQuests())
    setPage(4,team.name,teams)
    setCurrentStartIndex(0)
    localStorage.removeItem('game')
    localStorage.removeItem('index')
}
  useEffect(()=>{
    localStorage.setItem('index',currentStartIndex)
    
  },[currentStartIndex])
 useEffect(()=>{
  if(wonScore === 0 && team?.score >= Number.parseInt(maxPoints)){
    closeAndDeleteLocal()
  }
 },[wonScore])
  return (
    <StyledGame className={className}>
      <TeamTitle>
          { team ? team.name : ''}
          <Timer isGame={isGame} setIsGame={setIsGame} setWonScore={setWonScore}  wonScore={wonScore} currentStartIndex={currentStartIndex} setCurrentStartIndex={setCurrentStartIndex}/>
      </TeamTitle>
      {isGame ? <Alias team={team} isGame={isGame} wonScore={wonScore} setPage={setPage} setWonScore={setWonScore} currentStartIndex={currentStartIndex} setCurrentStartIndex={setCurrentStartIndex}/> : ''}
      
    </StyledGame>
  )
}

Game.propTypes = {
}