import React from "react";
import "./Item.css";

const Item = ({ name, onEdit, onDelete }) => {
  return (
    <div className="item-container">
      <h2>{name}</h2>
      <div className="button-container">
        <button
          type="button"
          className="item-button edit-button"
          onClick={onEdit}
        >
          Edit
        </button>
        <button
          type="button"
          className="item-button delete-button"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Item;
