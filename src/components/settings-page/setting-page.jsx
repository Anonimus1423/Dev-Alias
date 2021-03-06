import React from 'react'
import styled from 'styled-components'
import { TextDrop } from '../global/text-drop';
import { InvertedButton, SlideContainer, Welcome } from '../../styles/global-components';
import { StyledStartPage } from '../start-page/start-page';
import { AddTeam } from './settings-page-components/AddTeam';
import { useSelector } from "react-redux";

const StyledSettingPage = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.secondColor};
  z-index: 2;
`
const Body = styled(StyledStartPage)` 
  width: 100%;
  max-width: 340px;
`
const MyWelcome = styled(Welcome)` 
  &>span
  {
    letter-spacing: 3px;
    color: ${({ theme }) => theme.colors.secondTextColor};
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
`
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
`

export const SettingPage = ({ setPage, page }) => {
  let className = page > 1 ? "top" : page !== 1 ? "right" : "middle";
  const teams = useSelector(state => state.teams.teams);
  const changePage = () => {
    if(teams.length >= 2)
    {
      setPage(2)
    }
  }
  return (
    <SlideContainer className={className}>
      <StyledSettingPage>
        <Body>
          <MyWelcome>
            <TextDrop start={page === 1} string='Settings' delay={0.1} startDelay={0} />
          </MyWelcome>
          <AddTeam teams={teams} />
          <Buttons>
            <Button onClick={changePage}>Start Alias</Button>
            <Button onClick={() => setPage(0)}>Go Back</Button>
          </Buttons>
        </Body>
      </StyledSettingPage>
    </SlideContainer>
  )
}
