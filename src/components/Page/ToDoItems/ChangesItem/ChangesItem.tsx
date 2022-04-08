import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changesVisible, complet, deledeToDo, editingToDo, saveEditToDo } from "../../../../Store/action";
import { RootState, TTodo } from "../../../../Store/types";

const ChangesItem = ({ item }: { item: TTodo }) => {
    const data = useSelector((state: any) => state.todos.todosData)
    const dispatch = useDispatch();
    const itemRef: any = useRef(null);



    // Редактирование taska
    const EditTask = (item: TTodo, data: TTodo[]) => {
        dispatch(saveEditToDo(item))
        dispatch(editingToDo(item.id, data))
    }
    // Удаление taska
    const DeleteTask = (item: TTodo, data: TTodo[]) => dispatch(deledeToDo(data, item))
    // Выполнение taska
    const CompletTask = (item: number, data: TTodo[]) => dispatch(complet(item, data))

    useEffect(() => {
        if (item.visible) {
            window.addEventListener('click', handleClick)
        } else {
            window.removeEventListener('click', handleClick)
        }
    }, [item.visible]);

    // Visible изменяется на true или false
    const handleClick = (event: any) => {
        if (
            itemRef?.current &&
            !itemRef.current.contains(event.target)
        ) {
            dispatch(changesVisible(item.id, data))
            window.removeEventListener('click', handleClick)
        } else {
            window.removeEventListener('click', handleClick)
        }
    }

    // useEffect(() => {
    //     if (item.visible) {
    //         console.log("itemRef: ", itemRef)
    //         console.log('addEventListener')
    //         window.addEventListener('click', handleClick)
    //     } else {
    //         window.removeEventListener('click', handleClick)
    //     }
    // }, [item.visible]);

    // // Visible изменяется на true или false
    // const handleClick = (event: any) => {
    //     console.log("itemRef: ", itemRef)
    //     console.log("event.target: ", event.target)
    //     if (event.target !== itemRef.current) {
    //         dispatch(changesVisible(item.id, data))
    //         window.removeEventListener('click', handleClick)
    //     } else if (event.target) {
    //         console.log("1234: ", event.target);
    //     }
    // }

    return (
        <div ref={itemRef}
            id="modalId"
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