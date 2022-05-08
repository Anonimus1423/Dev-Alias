import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import styled from 'styled-components';
import { DecrementIcon, IncrementIcon } from '../../../assets/icons/settings';
import {changePoint} from '../../../store/reducers/point-reducer'

const Points = styled.div`
    margin-top: 20px;
`
const PoinstTitle = styled.div`
    color: ${({theme})=>theme.colors.quartersColor};
    font-size:14px;
    margin: 10px 0px;
`
const PointBlock = styled.div`
    max-width:100%;
    border:1px solid ${({ theme }) => theme.colors.quartersColor }};
    padding: 10px 5px;
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
    gap:8px;
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
    padding: 3px 5px;
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
    const dispatch = useDispatch()
    
    const ChangeLivePoints = (newPoints) => {
        if(newPoints>0 && newPoints<360){
            dispatch(changePoint(newPoints))
        }else {
            toast.error('Max Victory Points` 360')
        }
    }

    return(
        <Points>
            <PoinstTitle>
                VICTORY POINTS
            </PoinstTitle>
            <PointBlock>
                <PointInput type='number' value={LivePoints} onChange={(e)=>ChangeLivePoints(e.target.value)}/>
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