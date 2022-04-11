import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../hooks";
import { deledeToDo, ChangeToDo } from "../../../../Store/action";
import { TTodo } from "../../../../Store/types";
import Changes from "../Changes/Changes";

const ItemsEdit = ({ item }: { item: TTodo }) => {
    const { todosData } = useAppSelector(state => state.todos);
    const { editedToDo } = useAppSelector((state: any) => state.todos);
    const dispatch = useDispatch();
    const [userEditText, setUserEditText] = useState(editedToDo.text)
    const [userEditHead, setUserEditHead] = useState(editedToDo.head)
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
                            onClick={() => editedSave(todosData, item)}>
                            {(!!userEditHead && !!userEditText) ? "сохранить" : "отмена"}</p> :
                        <Changes item={item} />
                }
            </div>
        </>
    )
}

export default ItemsEdit;