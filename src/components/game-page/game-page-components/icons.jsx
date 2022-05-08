import React from 'react'
import styled from 'styled-components'
import { DeclineIcon, DeleteIcon, SettingIcon } from '../../../assets/icons/settings'

const StyledIcons = styled.div` 
    display: flex;
    position: absolute;
    left: 100%;
    top: 15px;
    width: 60px;
    justify-content: space-between;
    align-items: center;
    transform: translateX(-100%) translateX(-15px);
    cursor: pointer;
    &>svg:hover
    {
        opacity: 0.6;
    }
`

export default function Icons({ setPage }) {
    return (
        <StyledIcons>
            <SettingIcon onclick={() => setPage(2)} />
            <DeclineIcon onclick={() => setPage(0)} width={25} height={25} />
        </StyledIcons>
    )
}
