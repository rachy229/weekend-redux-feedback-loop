import {useHistory} from 'react-router-dom';

function Supported() {

    const history = useHistory();

    const handleNext = () => {
        history.push('/comments')
    }


    return(
        <div>
            <h1>How well are you being suypported?</h1>
            <input></input>
            <button onClick={handleNext} >Next</button>
        </div>
    )

}

export default Supported;