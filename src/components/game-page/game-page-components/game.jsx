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
  return (
    <StyledGame className={className}>
      {isGame ? <TeamTitle>{team.name || ''}</TeamTitle> : ''}
      {isGame ? <Alias/> : ''}
      <Timer isGame={isGame} setIsGame={setIsGame}/>
    </StyledGame>
  )
}

Game.propTypes = {
}