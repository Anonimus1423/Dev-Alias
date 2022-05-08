import React from 'react';
import styled from 'styled-components';
import { Team } from './Team';
import PropTypes from 'prop-types';

const StyledTeams = styled.div` 
    margin-top: 25px;
`;
const None = styled.p`
    font-size: 16px;
    text-align: center;
    font-weight: bold;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.secondTextColor};
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    &::before
    {
        content: "";
        position: absolute;
        left: 50%;
        top: 100%;
        transform: translate(-50%, 150%);
        height: 2px;
        width: 100%;
        background-color: ${({ theme }) => theme.colors.quartersColor};
    }
`;

export const Teams = ({ teams }) => {
  return(
    <StyledTeams>
      {
        teams.length 
          ?
          teams.map((e, i)=>{
            return(
              <Team key={i} id={e.id} teamName={ e.name }/>
            );
          })
          :
          <None>Add minimum 2 teams</None>
      }
    </StyledTeams>
  );
};
Teams.propTypes = {
  teams: PropTypes.object
};