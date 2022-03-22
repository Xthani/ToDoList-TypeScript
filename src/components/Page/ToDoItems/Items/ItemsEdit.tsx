import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deledeToDo, ChangeToDo } from "../../../../Store/action";
import { RootState, TTodo } from "../../../../Store/types";
import Changes from "../Changes/Changes";

const ItemsEdit = ({ item }: { item: TTodo }) => {
    const data = useSelector((state: RootState) => state.todos.todosData)
    const edited = useSelector((state: RootState) => state.todos.editedToDo)
    const dispatch = useDispatch();
    const [userEditText, setUserEditText] = useState(edited.text)
    const [userEditHead, setUserEditHead] = useState(edited.head)
    // Получение редактируемого значения value Text
    const editChangeText = ({ currentTarget: { value } }: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserEditText(value)
    }
    // Получение редактируемого значения value Head
    const editChangeHead = ({ currentTarget: { value } }: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserEditHead(value)
    }
    // Сохранение Text и Head
    const editedSave = (data: TTodo[], item: TTodo) => {
        if (userEditText.trim() !== '' && userEditHead.trim() !== '') {
            dispatch(ChangeToDo(userEditText, userEditHead, data, item))
            setUserEditText('')
            setUserEditHead('')
        } else dispatch(deledeToDo(data, item))
    }
    return (
        <>
            {item.edit ?
                <textarea
                    className="head-task-inpt"
                    value={userEditHead}
                    onChange={editChangeHead}
                    placeholder='Задача...' /> :
                <h4 className={item.completed ? "head-task line-through" : "head-task"}>{item.head}</h4>
            }
            {
                item.edit ?
                    <textarea
                        className="text-task-inpt"
                        value={userEditText}
                        onChange={editChangeText}
                        placeholder='Комментарий...' /> :
                    <p className={item.completed ? "text-task line-through" : "text-task"}>{item.text}</p>
            }
            <div className="changes-wrapper">
                <p className='date-task'>
                    {new Date().toLocaleDateString()} {new Date().toLocaleTimeString().slice(0, -3)}</p>
                {
                    item.edit ?
                        <p
                            className='changes'
                            onClick={() => editedSave(data, item)}>
                            {(!!userEditHead && !!userEditText) ? "сохранить" : "отмена"}</p> :
                        <Changes item={item} />
                }
            </div>
        </>
    )
}

export default ItemsEdit;