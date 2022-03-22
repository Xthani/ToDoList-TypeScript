import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { complet, deledeToDo, editingToDo, saveEditToDo } from "../../../../Store/action";
import { RootState, TTodo } from "../../../../Store/types";

const ChangesItem = ({ item }: { item: TTodo }) => {
    const data = useSelector((state: any) => state.todos.todosData)
    const dispatch = useDispatch();

    // Редактирование taska
    const EditTask = (item: TTodo) => {
        dispatch(saveEditToDo(item))
        dispatch(editingToDo(item.id, data))
    }
    // Удаление taska
    const DeleteTask = (item: TTodo) => dispatch(deledeToDo(data, item))
    // Выполнение taska
    const CompletTask = (item: TTodo) => dispatch(complet(item, data))
    return (
        <div className='changes-item-wrapper'>
            <div className="changes-item ">
                <p className='ch-i' onClick={() => EditTask(item)}>Редактировать</p>
                <p className='ch-i' onClick={() => DeleteTask(item)}>Удалить</p>
                <p className='ch-i' onClick={() => CompletTask(item)}>Выполнено</p>
            </div>
        </div>
    )
}

export default ChangesItem;