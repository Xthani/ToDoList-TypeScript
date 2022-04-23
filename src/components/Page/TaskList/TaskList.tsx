import React from 'react'
import { useAppSelector } from '../../../hooks';
import ToDoItems from '../ToDoItems/ToDoItems'

const TaskList = () => {
    const { todosData } = useAppSelector((state: any) => state.todos);
    return (
        <div className='page-body'>
            < div className="head-wrapper" >
                <div className="head">
                    <h1 className='head-text'>All Tasks: {todosData.length}</h1>
                </div>
            </div >
            <ToDoItems />
        </div >
    )
}

export default TaskList