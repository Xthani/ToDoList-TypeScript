import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changesVisible, saveId } from "../../../../Store/action";
import { TTodo } from "../../../../Store/types";
import ChangesItem from "../ChangesItem/ChangesItem";

const Changes = ({ item }: { item: TTodo }) => {
    const data = useSelector((state: any) => state.todos.todosData)
    const [state, setState] = useState(1);
    const dispatch = useDispatch();
    const changes = (item: TTodo, data: TTodo[]) => {
        dispatch(changesVisible(item.id, data))
        dispatch(saveId(item))
    }
    return (
        <div className="changes-dote-wratter">
            <p className='changes-dote' >•••</p>
            <p onClick={() => changes(item, data)} className='changes-mobile' >•••</p>
            <ChangesItem item={item} />
        </div>

    )
}

export default Changes;