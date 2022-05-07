import React from 'react'

interface ITextDropProps
{
    string: string;
    startDelay: number;
    delay: number;
    start: boolean;
}
export const TextDrop: React.FC<ITextDropProps> = ({string, delay, startDelay, start}) => 
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