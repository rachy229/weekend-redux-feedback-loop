import {useHistory} from 'react-router-dom';

function Comments() {

    const history = useHistory();

    const handleNext = () => {
        history.push('/review')
    }


    return(
        <div>
            <h1>Comments?</h1>
            <input placeholder="Comment"></input>
            <button onClick={handleNext} >Next</button>
        </div>
    )
}

export default Comments;