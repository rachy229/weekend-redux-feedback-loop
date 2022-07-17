import { useDispatch } from 'react-redux';
import {useHistory } from 'react-router-dom';
import { useState } from 'react';

function Feeling() {

    const history = useHistory();

    const dispatch = useDispatch();

    const [newFeeling, setNewFeeling] = useState('')

    const handleFeeling = (event) => {
        if (newFeeling === ''){
            alert('You gotta fill that out, bud')
        } else {
            dispatch({
                type: 'ADD_FEELING',
                payload: newFeeling
            })
            history.push('/understanding')

        }
        console.log(newFeeling);

    }

    return(
        <div>
            <h1>How are you feeling?</h1>
            <input placeholder='please enter a number 1-5' onChange={event => setNewFeeling(event.target.value)} type="number" min={1} max={5}></input>
            <button onClick={handleFeeling} >Next</button>
        </div>
    )
}

export default Feeling;