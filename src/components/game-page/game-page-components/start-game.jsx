import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { Button, goBottom } from '../../../styles/global-components'
import { GameTitle } from '../../start-page/start-page'
import { TextDrop } from '../../global/text-drop'
import { useSelector } from 'react-redux';

const StyledStartGame = styled.div`
    transition: 0.4s;
    transform: scale(1);
    opacity: 1;
    z-index: -1000;
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
const Top = styled.div` 
    border-bottom: 2px solid ${({ theme }) => theme.colors.mainColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    min-width: 330px;
    padding: 2px;
    @media(max-width: 450px)
    {
        width: 280px;
        min-width: 0;
    }
`
const TeamName = styled.h2`
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    margin-right: 25px;
`
const Scores = styled.h2`
    text-align: center;
    font-size: 24px; 
`
const MyButton = styled(Button)` 
    margin-top: 20px;
`
const MyGameTitle = styled(GameTitle)` 
    &>span
    {
        animation: none;    
        &.start
        {
            animation: ${goBottom} 1s linear forwards;
        }
    } 

`
export default function StartGame({ setIsGame, teamOrder, teams, page, isGame }) 
{
    const thisActiveIndex = useSelector(state=>state.index);
    const team = teams[thisActiveIndex];
    const className = isGame ? "back" : "forward";
    return (
        <StyledStartGame className={className}>
            <MyGameTitle>
                <TextDrop start={page === 2} string='DEV ALIAS' delay={0.08} startDelay={0}/>
            </MyGameTitle>
            <Top>
                <TeamName>Team Name</TeamName>
                <Scores>{team?.name}</Scores>
            </Top>
            <Top>
                <TeamName>Score</TeamName>
                <Scores>{team?.score}</Scores>
            </Top>
            <MyButton onClick={() => setIsGame(true)}>Start Round</MyButton>
        </StyledStartGame>
    )
}
StartGame.propTypes = {
  setIsGame: PropTypes.func,
  teamOrder: PropTypes.number,
  teams: PropTypes.array
};