import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks";
import { addToDo, clear, logOut, removeUser, saveUser } from "../../Store/action";

const Header = () => {
    const dispatch = useDispatch();
    const { userVerification, user } = useAppSelector((state: any) => state.todos);

    // Создание нового item-а
    const handleAdd = () => {
        // dispatch(saveUser(userVerification[0]))
        dispatch(addToDo({
            id: Date.now(),
            user: user.email,
            head: '',
            text: '',
            visibilityNewItem: true, // отобразить новый item (да)
            edit: true, // отобразить input ввода а не текст (да) - false - true
            editing: false, // отобразить форму для редактирования (нет) - true 
            completed: false, // задание выполнено (нет)
            visible: false, // форма редактирования не активна
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString().slice(0, -3)
        }))
    }
    // Удаление всех item-ов
    const clearToDo = () => window.confirm('Очистить весь список?') && dispatch(clear())
    const clearUser = () => window.confirm('Удалить пользователя?') && dispatch(removeUser())
    const logOff = () => window.confirm('Выйти?') && dispatch(logOut())

    return (
        <div className='sidebar'>
            <div className="logo-wrapper">
                <a className='logo' href="#">{userVerification[0] ? "Задачи" : 'ToDos'}</a>
                <a className='logo dot' href="#">.</a>
            </div>
            {userVerification[0] &&
                <>
                    <button
                        className="btn-new-task-wrapper"
                        onClick={handleAdd}>+ Добавить</button>
                    <button
                        className="btn-clear-task-wrapper"
                        onClick={clearToDo}>Очистить</button>
                    <button
                        className="btn-clear-task-wrapper"
                        onClick={clearUser}>Удалить всех пользователей</button>
                    <button
                        className="btn-clear-task-wrapper"
                        onClick={logOff}>Выйти</button>
                </>}
        </div >
    )
}

export default Header;