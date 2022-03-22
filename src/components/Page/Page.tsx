import React from "react";
import { useSelector } from "react-redux";
import { TTodo } from "../../Store/types";
import ToDoItems from "./ToDoItems/ToDoItems";

const Page = () => {
    const data: TTodo[] = useSelector((state: any) => state.todos.todosData)

    return (
        <div className='page-body'>
            <div className="head-wrapper">
                <div className="head">
                    <h1 className='head-text'>All Tasks: {data.length}</h1>
                </div>
            </div>
            <ToDoItems />
        </div>
    )
}

export default Page;