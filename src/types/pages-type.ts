import { Dispatch } from "react";

export interface IPages
{
    setPage: Dispatch<React.SetStateAction<number>>;
    page: number;
}