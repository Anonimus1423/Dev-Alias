import styled from 'styled-components';
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { selectNewTeamName,removeTeamAction } from '../../../store/reducers/team-reducer';

const Button = styled.button`
    margin-left: 20px;
    padding: 0px 20px;
`
const Input = styled.input`
    display: block;
    padding: 5px 15px;
    flex: 1;
    outline: none !important;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.quartersColor};
    color: ${({ theme }) => theme.colors.secondTextColor};
    letter-spacing: 0.5px;
    &::placeholder
    {
        color: ${({ theme }) => theme.colors.secondTextColor};
        opacity: 0.7;
        letter-spacing: 0.5px;
    }
    &:focus
    {
        -webkit-box-shadow: 0px 0px 15px 0px ${({ theme }) => theme.colors.quartersColor}33; 
        box-shadow: 0px 0px 15px 0px ${({ theme }) => theme.colors.quartersColor}33;  
    }
`
const Teams = styled.div`
    display:flex;
    width:100%;
    flex-direction:column;
    margin-bottom:12px;
    gap:12px;
`

const TeamName = styled.div`
    
`

export const Team = ({id,teamName}) => {
    const [isInputing,setIsInputing] = useState(false)
    const [renameInput,setRenameInput] = useState(teamName)
    const dispatch = useDispatch()
    const removeTeam = () => {
        dispatch(removeTeamAction(id))
    }
    const selectNewName = () => {
        dispatch(selectNewTeamName(id,renameInput))
        setIsInputing(false)
    }
    return(
        isInputing 
            ?
                <div key={id}>
                    <Input  value={renameInput} onChange={e => setRenameInput(e.target.value)} placeholder='Write team name pls'/>
                    <Button onClick={()=>selectNewName()}>select</Button>
                    <Button onClick={()=>setIsInputing(false)}>Close</Button>
                </div>
            :
               <div key={id}>
                    <TeamName>{teamName}</TeamName>
                    <Button onClick={()=>removeTeam()}>Delete</Button>
                    <Button onClick={()=>setIsInputing(true)}>Rename</Button>
               </div>
        
    )
}