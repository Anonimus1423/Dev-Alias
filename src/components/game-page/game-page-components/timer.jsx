import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { setActiveIndex } from '../../../store/reducers/active-index';


const TimerText = styled.div`
    font-size: 24px;
    font-weight: bold;
    text-align:center;
    width:100%;
    margin-top:10px;
    color: ${({theme}) => theme.colors.querySelector}    
`

export const Timer = ({isGame,setIsGame,setCurrentStartIndex,wonScore,setWonScore,currentStartIndex}) => {
    let selectedTime = useSelector(state=>state.time.time);
    const teams = useSelector(state=>state.teams.teams)
    const thisActiveIndex = useSelector(state=>state.index)
    const dispatch = useDispatch()
    const initialGame = useSelector(state => state)
    const [selectedMaxTime,setSelectedMaxTime] = useState(useSelector(state=>state.time.time))
    useEffect(()=>{
        if(selectedTime !== selectedMaxTime){
          setSelectedMaxTime(selectedTime)
        }
    },[isGame])
    useEffect(()=>{
        if(isGame){
          const timer = setInterval(()=>{
            if(selectedMaxTime === 1){
                if(thisActiveIndex === teams.length - 1){
                    initialGame.index = 0
                    dispatch(setActiveIndex(0))
                }else{
                    initialGame.index = thisActiveIndex + 1
                    dispatch(setActiveIndex(thisActiveIndex + 1))
                }
                  setIsGame(false)
                  setCurrentStartIndex(currentStartIndex + 5)
                  toast.success(`Won ${wonScore}`)
                  setWonScore(0)
                  setSelectedMaxTime(selectedTime)
                  localStorage.setItem('game',JSON.stringify(initialGame))
            }else{
              setSelectedMaxTime(selectedMaxTime-1)
            }
          },800)
          return () => clearInterval(timer);
        }
    },[selectedMaxTime,isGame])
    return(
        <TimerText>{selectedMaxTime}</TimerText>
    )
}