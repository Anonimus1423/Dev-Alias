import React from 'react'
import styled from 'styled-components';


const Points = styled.div`
    margin-top: 20px;
`
const PoinstTitle = styled.div`
    color: ${({theme})=>theme.colors.quartersColor};
    font-size:14px;
    margin: 10px 0px;
`
export const AddPoints = () => {
    return(
        <Points>
            <PoinstTitle>
                VICTORY POINTS
            </PoinstTitle>
        </Points>
    )
}