import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledStartGame = styled.div`
`;
const Title = styled.h2`
    text-align: center;
    font-size: 58px;
    font-weight: bold;
    padding: 0px 15px; 
    border-bottom: 2px solid ${({ theme }) => theme.colors.mainColor};
`;
const Scores = styled.h2`
    text-align: center;
    margin-top: 5px;
    font-size: 22px; 
`;
export default function StartGame({ setIsGame, teamOrder, teams }) 
{
  const team = teams[teamOrder];
  return (
    <StyledStartGame>
      <Title>{team?.name}</Title>
      <Scores>Score: {team?.score}</Scores>
    </StyledStartGame>
  );
}
StartGame.propTypes = {
  setIsGame: PropTypes.func,
  teamOrder: PropTypes.number,
  teams: PropTypes.array
};