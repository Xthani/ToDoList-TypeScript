import { useDispatch } from "react-redux";
import { addToDo, clear } from "../../Store/action";

const Header = () => {
    const dispatch = useDispatch();
    // Создание нового item-а
    const handleAdd = () => {
        if (true) {
            dispatch(addToDo({
                id: Date.now(),
                head: '',
                text: '',
                visibilityNewItem: true, // отобразить новый item (да)
                edit: true, // отобразить input ввода а не текст (да) - false - true
                editing: false, // отобразить форму для редактирования (нет) - true 
                completed: false, // задание выполнено (нет)
                visible: false, // форма редактирования не активна
            }))
        }
    }
    // Удаление всех item-ов
    const clearToDo = () => window.confirm('Очистить весь список?') && dispatch(clear())


    return (
        <div className='sidebar'>
            <div className="logo-wrapper">
                <a className='logo' href="#">ToDos</a>
                <a className='logo dot' href="#">.</a>
                <div className="pro-wrapper">
                    <a className='pro' href="#">PRO</a>
                </div>
            </div>
            <button
                className="btn-new-task-wrapper"
                onClick={handleAdd}>+ Добавить</button>
            <button
                className="btn-clear-task-wrapper"
                onClick={clearToDo}>Очистить</button>
        </div>
    )
}

export default Header;