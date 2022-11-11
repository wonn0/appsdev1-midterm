import React from "react"
import './Item.css'

const Item = ({ name, onEdit, onDelete }) => {
    return (
        <div className="item-container">
            <p className="item-name">{name}</p>
            <button type="button" className="item-button edit-button" onClick={onEdit}>Edit</button>
            <button type="button" className="item-button delete-button" onClick={onDelete}>Delete</button>
        </div>
    )
}

export default Item;