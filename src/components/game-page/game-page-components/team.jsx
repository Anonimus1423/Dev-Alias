import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledTeam = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    margin-top: 10px;
    width: 150px;
    border-radius: 4px;
    position: relative;
    z-index: -1;
    border-bottom: 3px solid ${({ theme }) => theme.colors.secondColor};
    &:first-child
    {
        margin-top: 0px;
    }
`
const Name = styled.p`
    color: ${({ theme }) => theme.colors.secondTextColor};
    font-size: 18px;
    font-weight: bold;
    max-width:85%;
    overflow-x:scroll;
    &&::-webkit-scrollbar {
        display: none;
      }
`
const Score = styled.p`
    color: ${({ theme }) => theme.colors.secondTextColor};
    font-size: 18px;
`
export default function Team({ team }) 
{
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const [color, setColor] = useState(`rgb(${r}, ${g}, ${b})`);
    useEffect(() => {
        setColor(`rgb(${r}, ${g}, ${b})`)
    })
    let colorBlack = false;
    if(r + g + b > 382)
    {
        colorBlack = true;
    }
    return (
        <StyledTeam style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
            <Name style={{ color: colorBlack ? "black" : null }}>{team.name}</Name>
            <Score style={{ color: colorBlack ? "black" : null }}>{team.score}</Score>
        </StyledTeam>
    )
}
