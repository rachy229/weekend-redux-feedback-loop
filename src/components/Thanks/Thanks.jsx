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
            <div>
                <img className='goose' src='https://i.pinimg.com/originals/2c/22/12/2c2212ae2f042ee611778fef05e49a99.jpg'/>
            </div>
        </div>
    )
}

export default Thanks;