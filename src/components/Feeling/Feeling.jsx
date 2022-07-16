import {useHistory} from 'react-router-dom';

function Feeling() {

    const history = useHistory();

    const handleNext = () => {
        history.push('/understanding')
    }

    return(
        <div>
            <h1>How are you feeling?</h1>
            <input placeholder="feeling"></input>
            <button onClick={handleNext} >Next</button>
        </div>
    )
}

export default Feeling;