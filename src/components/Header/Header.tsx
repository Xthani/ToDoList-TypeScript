import React from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../../Store/action";

const Header = () => {
    const dispatch = useDispatch();
    const handleAdd = () => {
        if (true) {
            dispatch(addToDo({
                id: Date.now(),
                head: '',
                text: '',
                visibilityNewItem: true, // отобразить новый item (да)
                edit: true, // отобразить input ввода а не текст (да) - false - true
                editing: false, // отобразить форму для редактирования (нет) - true 
                completed: false // задание выполнено (нет)
            }))
        }
    }
    return (
        <div className='sidebar'>
            <div className="logo-wrapper">
                <a className='logo' href="#">ToDos</a>
                <a className='logo dot' href="#">.</a>
                <div className="pro-wrapper">
                    <a className='pro' href="#">PRO</a>
                </div>
            </div>
            {/* <div className="btn-all-tasks-wrapper">
                <p className='btn-all-tasks'>All tasks</p>
            </div> */}
            {/* <div className='ul-wrapper'>
                <ul>
                    <li className='all-tasks'>All tasks</li>
                    <li className='basket'>Basket</li>
                    <li className='settings'>Settings</li>
                </ul>
            </div> */}
            <div
                className="btn-new-task-wrapper"
                onClick={handleAdd}>
                <p className="btn-new-task">+ Добавить</p>
            </div>
        </div>
    )
}

export default Header;