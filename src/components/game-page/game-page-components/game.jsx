import React from 'react'
import styled from 'styled-components'

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

export const Game = ({ isGame }) => {
  const className = !isGame ? "back" : "forward";
  return (
    <StyledGame className={className}>game</StyledGame>
  )
}
