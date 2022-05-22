import React from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

import styled from 'styled-components'
import { DeclineIcon, SettingIcon } from '../../../assets/icons/settings'
import { changePoint } from '../../../store/reducers/point-reducer'
import { RestartQuests } from '../../../store/reducers/quests-reducer'
import { localSet } from '../../../store/reducers/team-reducer'
import { changeTime } from '../../../store/reducers/time-reducer'

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
    const dispatch = useDispatch()
    const closeAndDeleteLocal = () => {
        dispatch(localSet( [
            { id: uuidv4(), name: 'Team 1', score: 0,  refreshNumber: 0 },
            { id: uuidv4(), name: 'Team 2', score: 0,  refreshNumber: 0 }
          ]))
        dispatch(changePoint(120))
        dispatch(changeTime(60))
        dispatch(RestartQuests())
        setPage(0)
        localStorage.removeItem('game')
        localStorage.removeItem('index')
    }
    return (
        <StyledIcons>
            <SettingIcon onClick={() => setPage(1)} />
            <DeclineIcon onClick={() => closeAndDeleteLocal()} width={25} height={25} />
        </StyledIcons>
    )
}
