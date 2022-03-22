import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveToDo, deledeToDo } from "../../../../Store/action";
import { RootState, TTodo } from "../../../../Store/types";
import Changes from "../Changes/Changes";
import ItemsEdit from "./ItemsEdit";

const Items = ({ item }: { item: TTodo }) => {
    const data = useSelector((state: RootState) => state.todos.todosData)
    const dispatch = useDispatch();
    const [userText, setUserText] = useState('');
    const [userHead, setUserHead] = useState('');
    // Получение значение value Text
    const handleChangeText = ({ currentTarget: { value } }: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserText(value)
    }
    // Получение значение value Head
    const handleChangeHead = ({ currentTarget: { value } }: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserHead(value)
    }
    // Сохранение Text и Head
    const handleSave = (data: TTodo[], item: TTodo) => {
        if (userText.trim() !== '' && userHead.trim() !== '') {
            dispatch(saveToDo(userText, userHead, data, item))
            setUserText('')
            setUserHead('')
        } else dispatch(deledeToDo(data, item))
    }

    return (
        <div className="item">
            {item.editing ?
                <ItemsEdit item={item} /> :
                <>
                    {item.edit ?
                        <textarea
                            className="head-task-inpt"
                            value={userHead}
                            onChange={handleChangeHead}
                            placeholder='Задача...' /> :
                        <h4 className={item.completed ? "head-task line-through" : "head-task"}>{item.head}</h4>
                    }
                    {
                        item.edit ?
                            <textarea
                                className="text-task-inpt"
                                value={userText}
                                onChange={handleChangeText}
                                placeholder='Комментарий...' /> :
                            <p className={item.completed ? "text-task line-through" : "text-task"}>{item.text}</p>
                    }
                    <div className="changes-wrapper">
                        <p className='date-task'>
                            {new Date().toLocaleDateString()}   {new Date().toLocaleTimeString().slice(0, -3)}</p>
                        {
                            item.edit ?
                                <p
                                    className='changes'
                                    onClick={() => handleSave(data, item)}>
                                    {(!!userHead && !!userText) ? "сохранить" : "отмена"}</p> :
                                <Changes item={item} />
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default Items;