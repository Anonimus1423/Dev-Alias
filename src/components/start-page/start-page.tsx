import React from 'react'
import styled from "styled-components";
import { Button as btn } from '../../styles/global-components';
import { TextDrop } from '../global/text-drop';
import { IPages } from '../../types/pages-type';
import { Welcome, TopWhite, goBottom, SlideContainer } from '../../styles/global-components';

export const StyledStartPage = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); 
`
const GameTitle = styled.h1`
    font-size: 40px;
    text-align: center;
    font-weight: bold;
    &>span
    {
        transform: scaleY(1) translateY(-300px) scaleX(1);
        display: inline-block;
        animation: ${goBottom} 1s linear forwards;
        color: ${({ theme }) => theme.colors.thirdTextColor};
    }
`
const Button = styled(btn)`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 25px;
    transform-origin: center;
`

export const StartPage: React.FC<IPages> = ({ page, setPage  }) => 
{
    let className: string = page > 0 ? "left" : page !== 0 ? "right" : "";
    return (
        <SlideContainer className={className}>
            <TopWhite />
            <StyledStartPage>
                <Welcome>
                    <TextDrop start={page === 0} string='WELCOME TO OUR GAME' delay={0.1} startDelay={0}/>
                </Welcome>
                <GameTitle>
                    <TextDrop start={page === 0} string='DEV ALIAS' delay={0.2} startDelay={2.5}/>
                </GameTitle>
                <Button onClick={() => setPage(1)}>Start Game</Button>
            </StyledStartPage>
        </SlideContainer>
    )
}
