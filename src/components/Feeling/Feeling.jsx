import { useDispatch } from 'react-redux';
import {useHistory } from 'react-router-dom';
import { useState } from 'react';

function Feeling() {

    const history = useHistory();

    const dispatch = useDispatch();

    const [newFeeling, setNewFeeling] = useState('')

    const handleFeeling = (event) => {
        dispatch({
            type: 'ADD_FEELING',
            payload: newFeeling
        })
        console.log(newFeeling);

        history.push('/understanding')
    }

    return(
        <div>
            <h1>How are you feeling?</h1>
            <input onChange={event => setNewFeeling(event.target.value)} type="number" min={0} max={5}></input>
            <button onClick={handleFeeling} >Next</button>
        </div>
    )
}

export default Feeling;