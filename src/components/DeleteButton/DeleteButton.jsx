import React from "react";
import "./DeleteButton.scss";

const DeleteButton = ({ handleDelete }) => {
  return (
    <div className="deleteButton" onClick={handleDelete}>
      <button className="deleteButton__button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default DeleteButton;
