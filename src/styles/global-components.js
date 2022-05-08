import styled, {keyframes} from "styled-components";

export const goBottom = keyframes`
    0%
    {
        transform: scaleY(1) translateY(-300px) scaleX(1);
    }
    70%
    {
        transform: scaleY(1.5) scaleX(1) translateY(0px);
    }
    80%
    {
        transform: scaleY(0.7) translateY(0px) scaleX(1.45) translateY(15%);
    }
    100%
    {
        transform: scaleY(1) scaleX(1) translateY(0px);
    }
`
export const Button = styled.button` 
    font-size: 18px;
    background-color: transparent;
    border: none;
    outline: none !important;
    padding: 5px 15px;
    overflow: hidden;
    border: 2px solid ${({ theme }) => theme.colors.secondColor};
    position: relative;
    transition: 0.3s;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    transform-origin: center;
    &:before
    {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 0px;
        height: 0px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.secondColor};
        transition: 0.3s;
        z-index: -1;
    }
    &:hover
    {
        color: ${({ theme }) => theme.colors.secondTextColor}
    }
    &:hover:before
    {
        width: 110px;
        height: 110px;
    }
`
export const InvertedButton = styled(Button)`
    border: 1px solid ${({ theme }) => theme.colors.quartersColor};
    color: ${({ theme }) => theme.colors.secondTextColor};
    letter-spacing: 1px;
    &:before
    {
        background-color: ${({ theme }) => theme.colors.quartersColor};
    }
    &:hover
    {
        color: ${({ theme }) => theme.colors.defaultTextColor}
    }
`
export const TopWhite = styled.div`
    width: 100%;
    height: 20.1%;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
`
export const Welcome = styled.h2` 
    text-align: center;
    font-size: 52px;
    &>span
    {
        transition: 0.3s;
        transform: scaleY(1) translateY(-300px) scaleX(1);
        display: inline-block;
        &.start
        {
            animation: ${goBottom} 1s linear forwards;
        }
    }
`
export const SlideContainer = styled.div` 
    transition: 0.5s;
    position: absolute;
    height: 100vh;
    width: 100%;
    left: 50%;
    top: 0%;
    transform: translateX(-50%);
    &.left
    {
        left: 0%;
        transform: translateX(-100%);
    }
    &.right
    {
        left: 100%;
        transform: translateX(0%);
    }
    &.top
    {
        top: -1%;
        transform: translateY(-100%) translateX(-50%);
    }
    &.bottom
    {
        top: 100%;
        transform: translateY(0%) translateX(-50%);
    }
    &.middle
    {
        left: 50%;
        transform: translateX(-50%);
    }
`   