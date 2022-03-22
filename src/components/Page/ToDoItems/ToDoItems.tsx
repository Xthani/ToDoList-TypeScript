import React from "react";
import { useSelector } from "react-redux";
import { TTodo } from "../../../Store/types";
import Items from "./Items/Items";

const ToDoItems = () => {
    const data = useSelector((state: any) => state.todos.todosData)

    return (
        <div className="items-wrapper items-bg">
            <>
                {!!data.length && data.map((item: TTodo) =>
                    <div
                        key={item.id}
                        className={item.visibilityNewItem ? "item-wrapper" : "visibility"}
                    >
                        <Items item={item} />
                    </div>
                )}
            </>
        </div >
    )
}

export default ToDoItems;