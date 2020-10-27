import React, {useState} from 'react'
import { triviaData } from "./data";
import Trivia from "./Trivia"

const Container = () => {

    const [planeDataState, setPlaneDataState] = useState({})
    const planeData = () => setPlaneDataState(triviaData)
    return (
           <>
            <Trivia data={planeDataState}/>
            <button onClick={planeData} type="button">Get Data</button>
           </>
       )
}

export default Container;