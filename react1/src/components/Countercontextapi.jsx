import React from "react";
import { useContext } from "react";
import { context } from "./contextapi";

const Counter = ()=> {
    const {count} = useContext(context)
    return(
        <>
        {count}
        </>
    )
}
export default Counter