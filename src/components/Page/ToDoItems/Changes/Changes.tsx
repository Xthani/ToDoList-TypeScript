import React from "react";
import { TTodo } from "../../../../Store/types";
import ChangesItem from "../ChangesItem/ChangesItem";

const Changes = ({ item }: { item: TTodo }) => {
    const changes = () => {
        return console.log('changes')
    }
    return (
        <div className="changes-dote-wratter">
            <p className='changes' onClick={changes}>•••</p>
            <ChangesItem item={item} />
        </div>
    )
}

export default Changes;