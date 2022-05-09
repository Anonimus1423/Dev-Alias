import { useState } from "react"
import { useSelector } from "react-redux"
import styled from 'styled-components'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const Quests = styled.div`
    display:flex;
    margin: 20px 0px;
    flex-direction: column;
    gap:12px;
    align-items:center;
`
const Quest = styled.div`
    display:flex;
    width:100%;
`

const Positive = styled.div`
    width:30%;
    background-color: green;

`
const Negative = styled.div`
    width:30%;
    background-color: red;
`
export const Alias = ({isGame}) => {
    const [currentStartIndex,setCurrentStartIndex] = useState(0)
     const aliasis = useSelector(state=>state.quests)
    const [quests,setQuests] = useState(aliasis.slice(currentStartIndex,currentStartIndex+5))
    return(
        <Quests>
            {quests.map((e)=>{
                return(
                    <Quest key={uuidv4()}>
                        <Negative/>
                        {e}
                        <Positive/>
                    </Quest>
                )
            })}
        </Quests>
    )
}





