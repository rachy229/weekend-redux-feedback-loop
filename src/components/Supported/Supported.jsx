import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import { useDispatch } from 'react-redux';

function Supported() {

    const history = useHistory();

    const dispatch = useDispatch();

    const [newSupport, setNewSupport] = useState('');


    const handleSupported = (event) => {
        if (newSupport === ''){
            alert('You gotta fill that out, bud')
        } else {
            dispatch({
                type: 'ADD_SUPPORTED',
                payload: newSupport
            })
            history.push('/comments')
        }
    }


    return(
        <div>
            <h1>How well are you being supported?</h1>
            <input placeholder='please enter a number 1-5' onChange={event => setNewSupport(event.target.value)} type="number" min={1} max={5}></input>
            <button onClick={handleSupported} >Next</button>
        </div>
    )

}

export default Supported;