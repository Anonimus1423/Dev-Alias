import React from 'react'
import styled from 'styled-components'
import Team from './team'
import { v4 } from 'uuid'

const StyledTeams = styled.div`
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    @media(max-width: 725px)
    {
        left: 50%;
        top: 100%;
        max-height: 150px;
        overflow-y: scroll;
        transform: translateX(-50%) translateY(-100%) translateY(-15%);
        ::-webkit-scrollbar {
            display: none;
        }
    }
`
const Gradient = styled.div` 
    position: absolute;
    left: 50%;
    top: 100%;
    pointer-events: none;
    z-index: 2;
    width: 100%;
    width: 150px;
    max-height: 150px;
    height: 100%;
    background: rgb(255,0,254);
    background: linear-gradient(180deg, rgba(255,0,254,0) 82%, rgba(0,0,0,0.5662640056022409) 100%, rgba(0,0,0,0.57) 100%);
    transform: translateX(-50%) translateY(-100%) translateY(-15%);
    @media(min-width: 725px)
    {
        display: none;
    }
`
export default function Teams({ teams }) 
{
    const sortedTeam = teams.sort((a, b) => b.score - a.score)
    return (
        <div>
            <Gradient />
            <StyledTeams>
                { sortedTeam.map((team, i) => <Team key={v4()} team={team} />)}
            </StyledTeams>
        </div>
    )
}
