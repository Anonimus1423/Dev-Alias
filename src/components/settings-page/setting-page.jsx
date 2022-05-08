import React from 'react';
import styled from 'styled-components';
import { TextDrop } from '../global/text-drop';
import { InvertedButton, SlideContainer, Welcome } from '../../styles/global-components';
import { StyledStartPage } from '../start-page/start-page';
import PropTypes from 'prop-types';
import { AddTeam } from './settings-page-components/AddTeam';
import { useSelector } from 'react-redux';
import { AddTime } from './settings-page-components/AddTime';
import { AddPoints } from './settings-page-components/AddPoints';
import toast from 'react-hot-toast';
import { IsErrorWasPrintedScreen } from '../../hooks/toastCheck';

const StyledSettingPage = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.secondColor};
  z-index: 2;
`;
const Body = styled(StyledStartPage)` 
  width: 100%;
  max-width: 340px;
  padding: 0px 10px;
  max-height: 95vh;
  overflow-y: scroll;
  scrollbar-width: thin;
    scrollbar-color: #6969dd #e0e0e0;
    scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: darkgrey;
  }
  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`;
const MyWelcome = styled(Welcome)` 
  &>span
  {
    letter-spacing: 3px;
    color: ${({ theme }) => theme.colors.secondTextColor};
  }
`;
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

export const SettingPage = ({ setPage, page }) => {
  let className = page > 1 ? 'top' : page !== 1 ? 'right' : 'middle';
  const teams = useSelector(state => state.teams.teams);
  const initialGame = useSelector(state=>state)
  const changePage = () => {
    if(teams.length >= 2)
    {
      if(initialGame.point.points > 10 && initialGame.point.points < 360){
        localStorage.setItem('game',JSON.stringify(initialGame))
        setPage(2);
    }else {
        if(initialGame.point.points<11){
            if(!IsErrorWasPrintedScreen('Minimum Victory Points` 10')){
                toast.error("Minimum Victory Points` 10")
            }
        }else{
            if(!IsErrorWasPrintedScreen('Maximum Victory Points` 360')){
                toast.error("Maximum Victory Points` 360")
            }
        }
    }
     
    }else if(!IsErrorWasPrintedScreen('Add please more 2 teams')){
        toast.error('Add please more 2 teams')
    }
  };
  return (
    <SlideContainer className={className}>
      <StyledSettingPage>
        <Body>
          <MyWelcome>
            <TextDrop start={page === 1} string='Settings' delay={0.1} startDelay={0} />
          </MyWelcome>
          <AddTeam teams={teams} />
          <AddTime/>
          <AddPoints/>
          <Buttons>
            <Button onClick={changePage}>Start Alias</Button>
            <Button onClick={() => setPage(0)}>Go Back</Button>
          </Buttons>
        </Body>
      </StyledSettingPage>
    </SlideContainer>
  );
};

SettingPage.propTypes = {
  setPage: PropTypes.func,
  page: PropTypes.number
};