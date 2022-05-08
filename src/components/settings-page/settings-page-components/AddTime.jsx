import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { changeTime } from '../../../store/reducers/time-reducer';


const TimersBlock = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
    flex-wrap:wrap;
`

const TimerBlock = styled.div`
    width:20%;
    padding:20px 0px;
    cursor:pointer;
    border: 1px solid  ${({ theme }) => theme.colors.quartersColor};
    color: ${props => props.selected ?   ({ theme }) => theme.colors.secondColor :  ({ theme }) => theme.colors.quartersColor};
    background-color:${props => props.selected ?  ({ theme }) => theme.colors.quartersColor : 'inherit'};
    display:flex;
    border-radius:3px;
    align-items:center;
    justify-content:center;
    &:hover{
        background-color:${props => props.selected ?  ({ theme }) => theme.colors.quartersColor : 'inherit'};
    }
`
const TimerTitle = styled.div`
    color: ${({theme})=>theme.colors.quartersColor};
    font-size:14px;
    margin: 10px 0px;
`
const Timer = styled.div`
    margin-top:20px;
`
const times = [30,60,90,120]

export const AddTime = () => {
    const Time = useSelector(state=>state.time.time);
    const dispatch = useDispatch()
    
    const selectTime = (time) => {
        dispatch(changeTime(time))
    }

    return(
       <Timer>
           <TimerTitle>
               ROUND TIME
           </TimerTitle>
            <TimersBlock>
                {times.map( ( e )=>{
                    return <TimerBlock selected={e === Time} key={uuidv4()} onClick={()=>selectTime(e)}>{e}</TimerBlock>
                }) }
            </TimersBlock>
       </Timer>
    );
};