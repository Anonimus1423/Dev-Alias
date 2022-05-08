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
        transform: translateX(-50%) translateY(-100%) translateY(-15%);

    }
`
export default function Teams({ teams }) 
{
    const sortedTeam = teams.sort((a, b) => b.score - a.score)
    return (
        <StyledTeams>
            { sortedTeam.map((team, i) => <Team key={v4()} team={team} />)}
        </StyledTeams>
    )
}
