import { useAppSelector } from "../../hooks";
import ToDoItems from "./ToDoItems/ToDoItems";

const Page = () => {
    const { todosData } = useAppSelector((state: any) => state.todos);

    return (
        <div className='page-body'>
            <div className="head-wrapper">
                <div className="head">
                    <h1 className='head-text'>All Tasks: {todosData.length}</h1>
                </div>
            </div>
            <ToDoItems />
        </div>
    )
}

export default Page;