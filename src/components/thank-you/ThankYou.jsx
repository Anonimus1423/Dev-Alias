import React from 'react'
import { InvertedButton, SlideContainer, Welcome } from '../../styles/global-components'
import styled from 'styled-components'
import { StyledStartPage } from '../start-page/start-page';
import { TextDrop } from '../global/text-drop';
import Teams from '../game-page/game-page-components/teams';

const ThankYouBlock = styled(StyledStartPage)`
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.colors.secondColor};
    z-index: 3;
    color:#fff;
`;
const Body = styled(StyledStartPage)` 
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
`;
const WinnerTitle = styled(Welcome)`
    span{
        letter-spacing: 3px;
        color: ${({ theme }) => theme.colors.thirdTextColor};
    }
`
const Buttons = styled.div` 
  display: flex;  
  justify-content: center;  
  align-items: center;
  margin-top: 30px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;
const Button = styled(InvertedButton)`
  &:first-child
  {
    margin-right: 20px;
    border-width: 2px;
  }
  left: 0;
  top: 0;
  transform: none;
  &:hover:before
  {
    width: 113px;
    height: 113px;
  }
`;
function ThankYou({page,setPage,WictoryTeamName,FinishTeams}){
    let className = page > 3 ? 'middle' : 'left';
    return (
        <SlideContainer className={className}>
            <ThankYouBlock>
                <Body>
                    <WinnerTitle>
                        <TextDrop start={page === 4} string={`Winner ${WictoryTeamName}`} delay={0.1} startDelay={0} />
                    </WinnerTitle>
                    <Buttons>
                        <Button onClick={()=>window.location.reload()}>New Game</Button>
                    </Buttons>
                </Body>
                <Teams teams={FinishTeams}/>
            </ThankYouBlock>
        </SlideContainer>
    )
}

export default ThankYou