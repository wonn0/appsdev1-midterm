import React from "react"
import './Item.css'

const Item = ({ name, onEdit, onDelete }) => {
    return (
        <div className="item-container">
            <p className="item-name">{name}</p>
            <button type="button" className="item-button" onClick={onEdit}>edit</button>
            <button type="button" className="item-button" onClick={onDelete}>delete</button>
        </div>
    )
}

export default Item;