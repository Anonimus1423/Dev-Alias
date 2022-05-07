import { useSelector } from "react-redux";
import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import { Team } from "./Team";

const TeamsBlock = styled.div`
    display:flex;
    width:100%;
    flex-direction:column;
    margin-bottom:12px;
    gap:12px;
`
const TeamBlock = styled.div`
    width:100%;
    padding: 5px 10px;
    border:1px solid ${({ theme }) => theme.colors.quartersColor};
`
const TeamName = styled.div`
    
`

export const Teams = () => {
    const teams =   useSelector(state=>state.teams.teams);
    return(
        teams.map((e)=>{
            return(
                <Team id={e.id} teamName={ e.name }/>
            )
        })
    )
}