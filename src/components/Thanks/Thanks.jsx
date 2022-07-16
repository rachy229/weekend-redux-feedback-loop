import {useHistory} from 'react-router-dom';

function Thanks() {

    const history = useHistory();

    const handleNext = () => {
        history.push('/')
    }

    return(
        <div>
            <h1>Thank you!</h1>
            <button onClick={handleNext}>Leave New Feedback</button>
        </div>
    )
}

export default Thanks;