import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from 'styled-components'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { AddPointer, DeletePointer } from "../../../store/reducers/team-reducer";
import { useEffect } from "react";

const Quests = styled.div`
    display:flex;
    margin: 20px 0px;
    flex-direction: column;
    min-width: 330px;
    gap:12px;
    z-index: 2;
    align-items:center;
`
const Quest = styled.div`
    display:flex;
    width:100%;
`
const QuestTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    text-align:center;
    cursor: pointer;
    width: 100%;
    transition: 0.3s easy;
    padding: 10px 5px;
    color: ${props => props.isSelected ? "#125B50" : "#FF6363"};
`
const ScoreText = styled.div`
    font-size: 22px;
    margin-bottom: 20px;
    font-weight: bold; 
    text-align:center;
    margin: 0px auto;
    max-width:50%;
    margin-top: 20px;
    overflow-x:scroll;
    &&::-webkit-scrollbar {
        display: none;
    }
`
export const Alias = ({team,isGame,wonScore,currentStartIndex,setCurrentStartIndex,setWonScore,setPage}) => {
    const aliasis = useSelector(state=>state.quests)
    const [answeredQuests,setAnsweredQuests] = useState([])
    const dispatch = useDispatch() 
    const thisActiveIndex = useSelector(state => state.index)
    const [quests,setQuests] = useState(aliasis.slice(currentStartIndex,currentStartIndex+5))
    const newQuests = () => {
        setQuests(aliasis.slice(currentStartIndex+5,currentStartIndex+10))
        setCurrentStartIndex(currentStartIndex + 5)
    }
    useEffect(()=>{
        if(!isGame){
            newQuests()
        }
    },[currentStartIndex])
    const addPoint = (e) => {
        if(answeredQuests.indexOf(e) === -1){
            setAnsweredQuests([...answeredQuests,e])
            dispatch(AddPointer(thisActiveIndex))
           
            setWonScore(prev => prev + 1)
            if(answeredQuests.length === 4){
                setAnsweredQuests([])
                newQuests()
            }
        }else{
            let newAnswers = answeredQuests
            newAnswers = newAnswers.filter((elem)=>{
                return elem !== e
            })
            setAnsweredQuests([...newAnswers])
            dispatch(DeletePointer(thisActiveIndex))
        }
        localStorage.setItem('index',currentStartIndex)
    }
  
    return(
        <Quests>
            {quests.map((e)=>{
                return(
                    <Quest key={uuidv4()} onClick={() => addPoint(e)}>
                        <QuestTitle  isSelected={answeredQuests.indexOf(e) !== -1}>{e}</QuestTitle>
                    </Quest>
                )
            })}
            <ScoreText>score: {wonScore}</ScoreText>
        </Quests>
    )
}





