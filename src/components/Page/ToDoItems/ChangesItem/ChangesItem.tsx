import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { complet, deledeToDo, editingToDo, saveEditToDo } from "../../../../Store/action";
import { RootState, TTodo } from "../../../../Store/types";

const ChangesItem = ({ item }: { item: TTodo }) => {
    const data = useSelector((state: any) => state.todos.todosData)
    const dispatch = useDispatch();

    // Редактирование taska
    const EditTask = (item: TTodo, data: TTodo[]) => {
        dispatch(saveEditToDo(item))
        dispatch(editingToDo(item.id, data))
    }
    // Удаление taska
    const DeleteTask = (item: TTodo, data: TTodo[]) => dispatch(deledeToDo(data, item))
    // Выполнение taska
    const CompletTask = (item: number, data: TTodo[]) => dispatch(complet(item, data))
    return (
        <div
            className={!!item.visible ? 'changes-item-wrapper-visible' : 'changes-item-wrapper'} >
            <div className="changes-item ">
                <p className={!!item.completed ? 'ch-i-edit' : 'ch-i'} onClick={() => EditTask(item, data)}>Редактировать</p>
                <p className='ch-i' onClick={() => DeleteTask(item, data)}>Удалить</p>
                <p className='ch-i' onClick={() => CompletTask(item.id, data)}>Выполнено</p>
            </div>
        </div>
    )
}

export default ChangesItem;