import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import styled from 'styled-components';
import { DecrementIcon, IncrementIcon } from '../../../assets/icons/settings';
import {changePoint} from '../../../store/reducers/point-reducer'
import { IsErrorWasPrintedScreen } from '../../../hooks/toastCheck';

const Points = styled.div`
    margin-top: 20px;
`
const PoinstTitle = styled.div`
    color: ${({theme})=>theme.colors.quartersColor};
    font-size:16px;
    margin: 10px 0px;
`
const PointBlock = styled.div`
    max-width:100%;
    border:1px solid ${({ theme }) => theme.colors.quartersColor }};
    padding: 5px;
    display:flex;
    border-radius:3px;
`
const PointInput = styled.input`
    width:100%;
    padding: 10px 6px;
    background: inherit;
    border:none;
    outline: none;
    color: ${({theme})=>theme.colors.quartersColor};
    font-size:16px;
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`
const EButtons = styled.div`
    display:flex;
    flex-direction:column;
    padding-right:5px;
    gap:6px;
`
const EButton = styled.button`
    background:inherit;
    border-radius: 3px;
    cursor:pointer;
    border: 1px solid ${({theme})=>theme.colors.quartersColor};
    color:${({theme})=>theme.colors.quartersColor};
    path{   
        fill: ${({theme})=>theme.colors.quartersColor} 
    }
    padding: 0px 3px;
    transition: 0.3s;
    &:active{
        background: ${({theme})=>theme.colors.quartersColor};
        path{
            fill: ${({theme})=>theme.colors.secondColor};
        }
    }
`

export const AddPoints = () => {
    const LivePoints = useSelector(state=>state.point.points)
    const teams = useSelector(state=>state.teams.teams)
    const dispatch = useDispatch()
    
    const ChangeLivePoints = (newPoints) => {
        if(newPoints>=45 && newPoints<=150){
            const isGame = localStorage.getItem('game')
           if(isGame){
                let isTheMostValue = teams.some((el)=>{
                    return el.score >= newPoints
                })
                if(isTheMostValue){
                    if(!IsErrorWasPrintedScreen('Please write higher victory points')){
                        toast.error("Please write higher victory points")
                    }
                }else{
                    dispatch(changePoint(newPoints))
                }
           }else{
                dispatch(changePoint(newPoints))
           }
        }else {
            if(newPoints<45){
                if(!IsErrorWasPrintedScreen('Minimum Victory Points` 45')){
                    toast.error("Minimum Victory Points` 45")
                }
                dispatch(changePoint(45))
            }else{
                if(!IsErrorWasPrintedScreen('Maximum Victory Points` 150')){
                    toast.error("Maximum Victory Points` 150")
                }
                dispatch(changePoint(150))
            }
        }
    }

    return(
        <Points>
            <PoinstTitle>
                VICTORY POINTS
            </PoinstTitle>
            <PointBlock>
                <PointInput type='number' value={LivePoints} onChange={(e)=>dispatch(changePoint(Number.parseInt(e.target.value)))}/>
                <EButtons>
                    <EButton onClick={()=>ChangeLivePoints(LivePoints+1)}>
                        <IncrementIcon/>
                    </EButton>
                    <EButton onClick={()=>ChangeLivePoints(LivePoints-1)}>
                        <DecrementIcon/>
                    </EButton>
                </EButtons>
            </PointBlock>
        </Points>
    )
}