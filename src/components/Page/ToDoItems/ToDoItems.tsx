import { useAppSelector } from "../../../hooks";
import { TTodo } from "../../../Store/types";
import Items from "./Items/Items";

const ToDoItems = () => {
    const { todosData } = useAppSelector((state: TTodo[] | any) => state.todos);
    return (
        <div className="items-wrapper items-bg">
            <>
                {!!todosData.length && todosData.map((item: TTodo) =>
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