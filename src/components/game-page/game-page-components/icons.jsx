import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { DeclineIcon, SettingIcon } from '../../../assets/icons/settings'
import { changePoint } from '../../../store/reducers/point-reducer'
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
        dispatch(localSet([]))
        dispatch(changePoint(120))
        dispatch(changeTime(60))
        setPage(0)
        localStorage.removeItem('game')
    }
    return (
        <StyledIcons>
            <SettingIcon onClick={() => setPage(1)} />
            <DeclineIcon onClick={() => closeAndDeleteLocal()} width={25} height={25} />
        </StyledIcons>
    )
}
