import {useHistory} from 'react-router-dom';

function Understanding() {

    const history = useHistory();

    const handleNext = () => {
        history.push('/supported')
    }



    return(
        <div>
            <h1>How well are you understanding the content?</h1>
            <input></input>
            <button onClick={handleNext} >Next</button>
        </div>
    )

}

export default Understanding;