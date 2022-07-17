import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import { useDispatch } from 'react-redux';

function Understanding() {

    const history = useHistory();

    const dispatch = useDispatch();

    const [newUnderstand, setNewUnderstand] = useState('');

    const handleUnderstanding = (event) => {
        if (newUnderstand === ''){
            alert('You gotta fill that out, bud')
        } else {
            dispatch({
                type: 'ADD_UNDERSTANDING',
                payload: newUnderstand
            })
            history.push('/supported')
        }
    }



    return(
        <div>
            <h1>How well are you understanding the content?</h1>
            <input placeholder='please enter a number 1-5' onChange={event => setNewUnderstand(event.target.value)} type="number" min={1} max={5}></input>
            <button onClick={handleUnderstanding} >Next</button>
        </div>
    )

}

export default Understanding;