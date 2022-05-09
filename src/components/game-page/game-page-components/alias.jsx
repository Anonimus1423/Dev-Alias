import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from 'styled-components'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { AddPointer, DeletePointer } from "../../../store/reducers/team-reducer";

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

const Positive = styled.div`
    width:40%;
    z-index:1000;
    border-radius: 2px 10px 10px 2px;
    background-color: green;
    cursor: pointer;

`
const Negative = styled.div`
    width:40%;
    z-index:1000;
    background-color: red;
    cursor: pointer;
    padding: 10px 0px;
    border-radius: 10px 2px 2px 10px
`
const QuestTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    text-align:center;
    width: 100%;
    padding: 10px 5px;
    opacity: ${props => props.isSelected ? "0.7" : "1"};
`
export const Alias = ({isGame}) => {
    const [currentStartIndex,setCurrentStartIndex] = useState(0)
    const aliasis = useSelector(state=>state.quests)
    const [answeredQuests,setAnsweredQuests] = useState([])
    const dispatch = useDispatch() 
    const thisActiveIndex = useSelector(state => state.index)
    const [quests,setQuests] = useState(aliasis.slice(currentStartIndex,currentStartIndex+5))
    const newQuests = () => {
        setQuests(aliasis.slice(currentStartIndex+5,currentStartIndex+10))
        setCurrentStartIndex(currentStartIndex + 5)
    }
    const addPoint = (e) => {
        if(answeredQuests.indexOf(e) === -1){
            setAnsweredQuests([...answeredQuests,e])
            dispatch(AddPointer(thisActiveIndex))
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
       
    }
    // const passer = (e) => {
    //     if(answeredQuests.indexOf(e) !== -1){
    //         setAnsweredQuests([...answeredQuests,e])
    //     }else{
    //         setAnser
    //     }
    //     setAnswers(answers + 1)
    //     if(answers === 4){
    //         setAnswers(0)
    //         newQuests()
    //     }
    // }
    return(
        <Quests>
            {quests.map((e)=>{
                return(
                    <Quest key={uuidv4()} onClick={() => addPoint(e)}>
                        <QuestTitle  isSelected={answeredQuests.indexOf(e) !== -1}>{e}</QuestTitle>
                    </Quest>
                )
            })}
        </Quests>
    )
}





