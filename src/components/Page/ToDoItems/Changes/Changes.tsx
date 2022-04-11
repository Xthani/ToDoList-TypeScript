import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../hooks";
import { changesVisible, saveId } from "../../../../Store/action";
import { TTodo } from "../../../../Store/types";
import ChangesItem from "../ChangesItem/ChangesItem";

const Changes = ({ item }: { item: TTodo }) => {
    const { todosData } = useAppSelector(state => state.todos);
    const dispatch = useDispatch();
    const changes = (item: TTodo, data: TTodo[]) => {
        console.log('changes')
        dispatch(changesVisible(item.id, data));
        dispatch(saveId(item));

    }
    return (
        <div className="changes-dote-wratter">
            <p className='changes-dote' >•••</p>
            <p onClick={() => changes(item, todosData)} className='changes-mobile' >•••</p>
            <ChangesItem item={item} />
        </div>

    )
}

export default Changes;