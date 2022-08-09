import React from 'react';
import {useDispatch} from "react-redux";
import {deleteTodo, toggleComplete} from "../redux/slices/todoSlice";


const TodoItem = ({id, title, completed}) => {
    const dispatch = useDispatch();

    const onComplete = () => {
        dispatch(toggleComplete({id: id, completed: !completed}))
    }

    const onDelete = () => {
        dispatch(deleteTodo({id: id}))
    }

    return (
        <li className={`list-group-item ${completed && 'list-group-item-success'}`}>
            <div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' checked={completed}
                           onChange={onComplete}
                    ></input>
                    {title}
				</span>
                <button className='btn btn-danger' onClick={onDelete}>Delete</button>
            </div>
        </li>
    );
};

export default TodoItem;