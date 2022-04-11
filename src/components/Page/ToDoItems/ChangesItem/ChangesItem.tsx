import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../hooks";
import { changesVisible, complet, deledeToDo, editingToDo, saveEditToDo } from "../../../../Store/action";
import { TTodo } from "../../../../Store/types";

const ChangesItem = ({ item }: { item: TTodo }) => {
    const { todosData } = useAppSelector(state => state.todos);
    const dispatch = useDispatch();
    const itemRef: any = useRef(null);

    // Редактирование taska
    const EditTask = (item: TTodo, data: TTodo[]) => {
        dispatch(saveEditToDo(item));
        dispatch(editingToDo(item.id, data));
    }
    // Удаление taska
    const DeleteTask = (item: TTodo, data: TTodo[]) => dispatch(deledeToDo(data, item))
    // Выполнение taska
    const CompletTask = (item: number, data: TTodo[]) => dispatch(complet(item, data))

    useEffect(() => {
        if (item.visible) {
            console.log('addEventListener');
            window.addEventListener('click', handleClick)
        } else {
            console.log('removeEventListener');
            window.removeEventListener('click', handleClick)
        }
    }, [item.visible]);

    // Visible изменяется на true или false
    const handleClick = (event: any) => {
        console.log("handleClick")
        if (
            itemRef.current &&
            !itemRef.current.contains(event.target)
        ) {
            dispatch(changesVisible(item.id, todosData))
            window.removeEventListener('click', handleClick)
        } else window.removeEventListener('click', handleClick)
    }

    return (
        <div ref={itemRef}
            className={!!item.visible ? 'changes-item-wrapper-visible' : 'changes-item-wrapper'} >
            <div className="changes-item ">
                <p className={!!item.completed ? 'ch-i-edit' : 'ch-i'} onClick={() => EditTask(item, todosData)}>Редактировать</p>
                <p className='ch-i' onClick={() => DeleteTask(item, todosData)}>Удалить</p>
                <p className='ch-i' onClick={() => CompletTask(item.id, todosData)}>Выполнено</p>
            </div>
        </div>
    )
}

export default ChangesItem;