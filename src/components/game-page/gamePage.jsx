import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { SlideContainer } from '../../styles/global-components';
import StartGame from './game-page-components/start-game';

const StyledGameContainer = styled.div` 
    width: 100vw;
    height: 100vh;
    position: relative;
`
const StyledGamePage = styled.div` 
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`

export default function GamePage({ page }) {
    let className = page > 2 ? "top" : page !== 2 ? "bottom" : "middle";
    const [teamOrder, setTeamOrder] = useState(0);
    const [isGame, setIsGame] = useState(false);
    const teams = useSelector(state => state.teams.teams);
    
    return (
        <SlideContainer className={className}>
            <StyledGameContainer>
                <StyledGamePage>
                    {
                        isGame
                        ?
                        <GamePage />
                        :
                        <StartGame page={page} teamOrder={teamOrder} setIsGame={setIsGame} teams={teams} />
                    }
                </StyledGamePage>
            </StyledGameContainer>
        </SlideContainer>
    )
}
