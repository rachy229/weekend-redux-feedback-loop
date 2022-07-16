import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

function Review() {

    const feeling = useSelector(store =>store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);

    const history = useHistory();
    
    const dispatch = useDispatch();

    const handleNewFeedback = () => {
        dispatch({
            type: 'ADD_FEEDBACK',
            payload: {feeling, understanding, support, comments}
        })
        
        history.push('/thanks')
    }


    return(
        <div>
            <h1>Review Your Feedback!</h1>
            <h3>Feelings:{feeling}</h3>
            <h3>Understanding:{understanding}</h3>
            <h3>Supported:{support}</h3>
            <h3>Comments:{comments}</h3>
            <button onClick={handleNewFeedback} >Submit</button>
        </div>
    )
}

export default Review;