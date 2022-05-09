import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
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
  font-size: 28px;
  font-weight: bold;
  text-align:center;
`

export const Game = ({ isGame,setIsGame }) => {
  const thisActiveIndex = useSelector(state=>state.index);
  const team = useSelector(state => state.teams.teams[thisActiveIndex])
  const className = !isGame ? "back" : "forward";
  const [currentStartIndex,setCurrentStartIndex] = useState(Number.parseInt(localStorage.getItem('index')) || 0)
  const [wonScore,setWonScore] = useState(0)
  useEffect(()=>{
    localStorage.setItem('index',currentStartIndex)
  },[currentStartIndex])
  return (
    <StyledGame className={className}>
      <TeamTitle>{ team ? team.name : ''}</TeamTitle>
      {isGame ? <Alias isGame={isGame} setWonScore={setWonScore} currentStartIndex={currentStartIndex} setCurrentStartIndex={setCurrentStartIndex}/> : ''}
      <Timer isGame={isGame} setIsGame={setIsGame} setWonScore={setWonScore}  wonScore={wonScore} currentStartIndex={currentStartIndex} setCurrentStartIndex={setCurrentStartIndex}/>
    </StyledGame>
  )
}

Game.propTypes = {
}