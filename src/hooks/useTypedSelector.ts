import { TypedUseSelectorHook, useSelector } from "react-redux";
import { reducersType } from "../store/store";

export const useTypedSelector: TypedUseSelectorHook<reducersType>  = useSelector;