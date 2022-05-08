import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
<<<<<<< Updated upstream
import { DeclineIcon, DeleteIcon, SettingIcon } from '../../../assets/icons/settings'
import { changePoint } from '../../../store/reducers/point-reducer'
import { localSet } from '../../../store/reducers/team-reducer'
import { changeTime } from '../../../store/reducers/time-reducer'
=======
import { DeclineIcon, SettingIcon } from '../../../assets/icons/settings'
>>>>>>> Stashed changes

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
        setPage(1)
        localStorage.removeItem('game')
    }
    return (
        <StyledIcons>
<<<<<<< Updated upstream
            <SettingIcon onClick={() => setPage(2)} />
            <DeclineIcon onClick={() => closeAndDeleteLocal()} width={25} height={25} />
=======
            <SettingIcon onClick={() => setPage(1)} />
            <DeclineIcon onClick={() => setPage(0)} width={25} height={25} />
>>>>>>> Stashed changes
        </StyledIcons>
    )
}
