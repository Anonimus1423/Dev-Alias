

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import toast from 'react-hot-toast';
import { IsErrorWasPrintedScreen } from '../../../hooks/toastCheck';
import { v4 as uuidv4 } from 'uuid';
import { ChangeRefresh } from '../../../store/reducers/refresh-index';


const TimersBlock = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
    flex-wrap:wrap;
`

const TimerBlock = styled.div`
    width:20%;
    padding: 10px 0px;
    cursor:pointer;
    border: 1px solid  ${({ theme }) => theme.colors.quartersColor};
    color: ${props => props.selected ?   ({ theme }) => theme.colors.secondColor :  ({ theme }) => theme.colors.quartersColor};
    background-color:${props => props.selected ?  ({ theme }) => theme.colors.quartersColor : 'inherit'};
    display:flex;
    border-radius:3px;
    align-items:center;
    transition: 0.3s;
    justify-content:center;
    &:hover{
        background-color: ${props => props.selected ? 'inherit' :  ({ theme }) => theme.colors.quartersColor };
        color: ${props => props.selected ?  ({ theme }) => theme.colors.quartersColor  :   ({ theme }) => theme.colors.secondColor};
    }
`
const TimerTitle = styled.div`
    color: ${({theme})=>theme.colors.quartersColor};
    font-size:16px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    span{
        font-size: 16px;
        color: ${({theme})=>theme.colors.quartersColor};
    }
    margin: 10px 0px;
`
const Timer = styled.div`
    margin-top:20px;
`
const CustomInputRange = styled.input`
    -webkit-appearance: none; 
    width: 100%;
    background: transparent;
    transition: 0.3s ease;
    &::-webkit-slider-runnable-track{
        width: 100%;
        height: 13px;
        cursor: pointer;
        animate: 0.2s;
        box-shadow: 0px 0px 0px #000000;
        background: inherit;
        border-radius: 25px;
        transition: 0.3s ease;
        border: 1px solid ${({theme})=>theme.colors.quartersColor};
    }
    &::-webkit-slider-thumb {
        box-shadow: 0px 0px 0px #000000;
        border: 0px solid #000000;
        height: 20px;
        width: 20px;
        border-radius: 100%;
        background: ${({theme})=>theme.colors.quartersColor};
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -4px;
        transition: 0.3s ease;
      }
    //   &:focus::-webkit-slider-runnable-track {
    //     background:${({ theme }) => theme.colors.quartersColor};
    //   }
    //   &:focus::-webkit-slider-thumb {
    //     background:   ${({ theme }) => theme.colors.secondColor};
    //   }
`

export const AddRefresh = () => {
    const Refresh = useSelector(state=>state.refresh);
    const dispatch = useDispatch()
    const [inputRange,setInputRange] = useState(Refresh)
    const selectRefresh = (newInput) => {
        let isGame = JSON.parse(localStorage.getItem('game'))
        if(!isGame){
            dispatch(ChangeRefresh(newInput.target.value))
            setInputRange(newInput.target.value)
        }else if(!IsErrorWasPrintedScreen('You can not change this field on game')){
            toast.error('You can not change this field on game')
        }
    }

    return(
       <Timer>
           <TimerTitle>
               MAXIMUM REFRESH COUNTS
               <span>{inputRange}</span>
           </TimerTitle>
            <TimersBlock>
                {/* {times.map( ( e )=>{
                    return <TimerBlock selected={e === Time} key={uuidv4()} onClick={()=>selectTime(e)}>{e}</TimerBlock>
                }) } */}
                
                <CustomInputRange value={inputRange} type='range' min='1' max='10' onChange={(e)=>selectRefresh(e)}/>
            </TimersBlock>
       </Timer>
    );
};