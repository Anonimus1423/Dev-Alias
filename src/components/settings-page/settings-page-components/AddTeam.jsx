import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { addTeamAction } from '../../../store/reducers/team-reducer';
import { Teams } from './Teams';

const StyledAddTeam = styled.div` 
    margin-top: 50px;
`;
const Input = styled.input`
    display: block;
    padding: 5px 15px;
    flex: 1;
    outline: none !important;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.quartersColor};
    color: ${({ theme }) => theme.colors.secondTextColor};
    letter-spacing: 0.5px;
    &::placeholder
    {
        color: ${({ theme }) => theme.colors.secondTextColor};
        opacity: 0.7;
        letter-spacing: 0.5px;
    }
    &:focus
    {
        -webkit-box-shadow: 0px 0px 15px 0px ${({ theme }) => theme.colors.quartersColor}33; 
        box-shadow: 0px 0px 15px 0px ${({ theme }) => theme.colors.quartersColor}33;  
    }
`;
const Button = styled.button`
    margin-left: 20px;
    padding: 0px 20px;
`;
const Top = styled.form` 
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
`;

export const AddTeam = ({ teams }) => 
{
  const [teamName, setTeamName] = useState('');
  const [teamCount, setTeamCount] = useState(1);
  const [isInputing,setIsInputing] = useState(false);
  const dispatch = useDispatch();
  const addTeam = e =>
  {
    e.preventDefault();
    if(teamName !== '')
    {
      dispatch(addTeamAction(teamName));
    }
    else{
      dispatch(addTeamAction('team ' + teamCount));
      setTeamCount(teamCount + 1);
    }
    setTeamName('');
  };
  return (
    <StyledAddTeam>
      <Top>
        <Input value={teamName} onChange={e => setTeamName(e.target.value)} placeholder='Write team name pls'/>
        <Button onClick={addTeam}>Add</Button>
      </Top>
      <Teams teams={teams}/>
    </StyledAddTeam>
  );
};
AddTeam.propTypes = {
  teams: PropTypes.object
};