import React from 'react';
import styled from 'styled-components';
import { Button as btn } from '../../styles/global-components';
import { TextDrop } from '../global/text-drop';
import PropTypes from 'prop-types';
import { Welcome, TopWhite, goBottom, SlideContainer } from '../../styles/global-components';

export const StyledStartPage = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    heigth:100%;
    transform: translate(-50%, -50%); 
`
export const GameTitle = styled.h1`
    font-size: 40px;
    text-align: center;
    font-weight: bold;
    white-space: nowrap;
    &>span
    {
        transform: scaleY(1) translateY(-300px) scaleX(1);
        display: inline-block;
        animation: ${goBottom} 1s linear forwards;
        color: ${({ theme }) => theme.colors.thirdTextColor};
    }
    @media(max-width: 490px)
    {
        font-size: 35px;
    }
    @media(max-width: 400px)
    {
        font-size: 30px;
    }
`;
export const Button = styled(btn)`
    margin-top: 25px;
`;

export const StartPage = ({ page, setPage }) => 
{
  let className = page > 0 ? 'left' : page !== 0 ? 'right' : 'middle';
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
  );
};
StartPage.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func
};