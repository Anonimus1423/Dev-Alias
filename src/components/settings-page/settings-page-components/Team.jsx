import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { selectNewTeamName,removeTeamAction } from '../../../store/reducers/team-reducer';

const StyledTeam = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    &>form
    {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    padding: 8px 15px;
    margin-top: 10px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.mainColor};
    border-bottom: 4px solid ${({ theme }) => theme.colors.quartersColor};
`
const Buttons = styled.div` 
`
const Button = styled.button`
    padding: 3px 10px;
    border: none;
    outline: none !important;
    border-radius: 2px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.3s;
    &:hover
    {
        border-color: ${({ theme }) => theme.colors.secondColor};
        -webkit-box-shadow: 0px 0px 12px 0px ${({ theme }) => theme.colors.quartersColor}bb; 
        box-shadow: 0px 0px 12px 0px ${({ theme }) => theme.colors.quartersColor}bb;
    }
    &:first-child
    {
        margin-right: 8px;
    }
`
const Input = styled.input`
    border-radius: 2px;
    border: none;
    padding: 3px 5px;
    border: 1px solid transparent;
    outline: none !important;
    &:focus
    {
        border-color: ${({ theme }) => theme.colors.secondColor};
        -webkit-box-shadow: 0px 0px 12px 0px ${({ theme }) => theme.colors.quartersColor}bb; 
        box-shadow: 0px 0px 12px 0px ${({ theme }) => theme.colors.quartersColor}bb;
    }
`
const TeamName = styled.div`
    color: ${({ theme }) => theme.colors.secondTextColor};
`

export const Team = ({id,teamName}) => 
{
    const [isInputing, setIsInputing] = useState(false);
    const [renameInput, setRenameInput] = useState(teamName);
    const input = useRef();
    const dispatch = useDispatch()
    useEffect(() => 
    {
        console.log(isInputing);
        if(isInputing === true)
        {
            input?.current?.focus();
        }
    }, [isInputing])
    const removeTeam = () => {
        dispatch(removeTeamAction(id))
    }
    const selectNewName = e => {
        e.preventDefault();
        dispatch(selectNewTeamName(id,renameInput))
        setIsInputing(false)
    }
    return(
        <StyledTeam>
            {
                isInputing 
                ?
                    <form>
                        <Input ref={input} value={renameInput} onChange={e => setRenameInput(e.target.value)} placeholder='Write team name pls'/>
                        <Buttons>
                            <Button onClick={e => selectNewName(e)}>Change</Button>
                            <Button onClick={()=>setIsInputing(false)}>Cancel</Button>
                        </Buttons>
                    </form>
                :
                   <>
                        <TeamName>{teamName}</TeamName>
                        <Buttons>
                            <Button onClick={()=>removeTeam()}>Delete</Button>
                            <Button onClick={()=>setIsInputing(true)}>Rename</Button>
                        </Buttons>
                   </>
            }
        </StyledTeam>
    )
}