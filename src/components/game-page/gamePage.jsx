import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SlideContainer } from '../../styles/global-components';
import StartGame from './game-page-components/start-game';
import Teams from './game-page-components/teams';
import Icons from './game-page-components/icons';
import { Game } from './game-page-components/game';

const StyledGameContainer = styled.div` 
    width: 100vw;
    height: 100vh;
    position: relative;
`;
const StyledGamePage = styled.div` 
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export default function GamePage({ page, setPage }) {
  let className = page > 2 ? 'top' : page !== 2 ? 'bottom' : 'middle';
  const [teamOrder, setTeamOrder] = useState(0);
  const [isGame, setIsGame] = useState(false);
  const teams = useSelector(state => state.teams.teams);
  const [currentStartIndex,setCurrentStartIndex] = useState(Number.parseInt(localStorage.getItem('index')) || 0)
    
    return (
        <SlideContainer className={className}>
            <StyledGameContainer>
               {!isGame &&  <Teams teams={teams} />}
               {!isGame && (
                    <Icons setPage={(e)=>{
                        if(e === 0){
                            setCurrentStartIndex(0)
                            setIsGame(false)
                        }
                        setPage(e)
                    }}/>
               )}
                <StyledGamePage>
                    <Game isGame={isGame} setPage={setPage} currentStartIndex={currentStartIndex} setCurrentStartIndex={setCurrentStartIndex} setIsGame={setIsGame} />
                    <StartGame isGame={isGame} page={page} teamOrder={teamOrder} setIsGame={setIsGame} teams={teams} />
                </StyledGamePage>
            </StyledGameContainer>
        </SlideContainer>
    )
}
GamePage.propTypes = {
  page:PropTypes.number
};