import {useHistory} from 'react-router-dom';

function Review() {

    const history = useHistory();

    const handleNext = () => {
        history.push('/thanks')
    }

    return(
        <div>
            <h1>Review Your Feedback!</h1>
            <button onClick={handleNext} >Next</button>
        </div>
    )
}

export default Review;