import React from 'react'
import styled from 'styled-components'
import { Button, goBottom } from '../../../styles/global-components'
import { GameTitle } from '../../start-page/start-page'
import { TextDrop } from '../../global/text-drop'

const StyledStartGame = styled.div`
`
const Top = styled.div` 
    border-bottom: 2px solid ${({ theme }) => theme.colors.mainColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    min-width: 330px;
    padding: 2px;
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
export default function StartGame({ setIsGame, teamOrder, teams, page }) 
{
    const team = teams[teamOrder];
    return (
        <StyledStartGame>
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
            <MyButton>Start Round</MyButton>
        </StyledStartGame>
    )
}
