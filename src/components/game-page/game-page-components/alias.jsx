import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from 'styled-components'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { AddPointer, DeletePointer, RefreshNumber } from "../../../store/reducers/team-reducer";
import { useEffect } from "react";
import { IsErrorWasPrintedScreen } from "../../../hooks/toastCheck";
import toast from "react-hot-toast";

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
const RefreshButton = styled.button`
    background-color: inherit;
    border: none;
    transition: 0.3s;
    cursor: pointer;
    opacity:  ${props => !props.isOp ? 0.4 : 1};
    margin-top: 20px;
    `
export const Alias = ({team,isGame,wonScore,currentStartIndex,setCurrentStartIndex,setWonScore,setPage}) => {
    const aliasis = useSelector(state=>state.quests)
    const [answeredQuests,setAnsweredQuests] = useState([])
    const dispatch = useDispatch() 
    const thisActiveIndex = useSelector(state => state.index)
    const refreshBtn = useRef(null)
    const [quests,setQuests] = useState(aliasis.slice(currentStartIndex,currentStartIndex+5))
    const maxRefresh = useSelector(state=>state.refresh)
    const newQuests = () => {
        setQuests(aliasis.slice(currentStartIndex+5,currentStartIndex+10))
        setCurrentStartIndex(currentStartIndex + 5)
    }
    useEffect(()=>{
        if(!isGame){
            newQuests()
        }
    },[currentStartIndex])
    const refresh = () => {
      
        if(team.refreshNumber <= maxRefresh){
            if(refreshBtn.current.style.transform === 'rotate(360deg)'){
                refreshBtn.current.style.transform = 'rotate(-360deg)'
            }else{
                refreshBtn.current.style.transform = 'rotate(360deg)'            
            }
            setAnsweredQuests([])
            newQuests()
            dispatch(RefreshNumber(thisActiveIndex))
        }else if(!IsErrorWasPrintedScreen('Sorry (-_-) but yon not have refresh possibility')){
            toast.error('Sorry (-_-) but yon not have refresh possibility')
        }
    }
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
            <ScoreText>score: {wonScore || 0}</ScoreText>
            <RefreshButton ref={refreshBtn} isOp={team.refreshNumber <= maxRefresh} onClick={refresh}><svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z"/></svg></RefreshButton>
        </Quests>
    )
}





