import React from 'react'

export const TextDrop = ({string, delay, startDelay, start}) => 
{
    return (
        <>
            {
                string.split("")
                    .map((char, index) => {
                        return <span className={start ? "start" : ""} key={index} style={{ animationDelay: (delay * index) + startDelay + "s", margin: "0" + ((char === " " ? 5 : 0) + "px") }}>{char}</span>
                    })
            }
        </>
    )
}