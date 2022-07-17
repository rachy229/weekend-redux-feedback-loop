import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';

function Comments() {

    const history = useHistory();

    const dispatch = useDispatch();

    const [newComment, setNewComment] = useState('');


    const handleComment = (event) => {
        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment
        })
        console.log(newComment);

        history.push('/review')
    }


    return(
        <div>
            <h1>Comments?</h1>
            <input onChange={event => setNewComment(event.target.value)} placeholder="Optional"></input>
            <button onClick={handleComment} >Next</button>
        </div>
    )
}

export default Comments;