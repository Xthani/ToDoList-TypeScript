import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changesVisible } from "../../../../Store/action";
import { TTodo } from "../../../../Store/types";
import ChangesItem from "../ChangesItem/ChangesItem";

const Changes = ({ item }: { item: TTodo }) => {
    const data = useSelector((state: any) => state.todos.todosData)
    const dispatch = useDispatch();
    const changes = (item: number, data: TTodo[]) => dispatch(changesVisible(item, data))
    return (
        <div className="changes-dote-wratter">
            <p onClick={() => changes(item.id, data)} className='changes' >•••</p>
            <ChangesItem item={item} />
        </div>
    )
}

export default Changes;