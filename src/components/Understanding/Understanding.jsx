import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import { useDispatch } from 'react-redux';

function Understanding() {

    const history = useHistory();

    const dispatch = useDispatch();

    const [newUnderstand, setNewUnderstand] = useState('');

    const handleUnderstanding = (event) => {
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: newUnderstand
        })

        history.push('/supported')
    }



    return(
        <div>
            <h1>How well are you understanding the content?</h1>
            <input onChange={event => setNewUnderstand(event.target.value)} type="number" min={0} max={5}></input>
            <button onClick={handleUnderstanding} >Next</button>
        </div>
    )

}

export default Understanding;