import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import { useDispatch } from 'react-redux';

function Supported() {

    const history = useHistory();

    const dispatch = useDispatch();

    const [newSupport, setNewSupport] = useState('');


    const handleSupported = (event) => {
        dispatch({
            type: 'ADD_SUPPORTED',
            payload: newSupport
        })

        history.push('/comments')
    }


    return(
        <div>
            <h1>How well are you being suypported?</h1>
            <input onChange={event => setNewSupport(event.target.value)} type="number" min={0} max={5}></input>
            <button onClick={handleSupported} >Next</button>
        </div>
    )

}

export default Supported;