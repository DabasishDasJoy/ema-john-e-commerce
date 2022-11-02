import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({
  handleRemoveItem,
  product: { _id, img, quantity, name, price },
}) => {
  return (
    <div className="review-item-container">
      <div className="review-item-img-container">
        <img src={img} alt="" />
      </div>
      <div className="review-item-details">
        <div className="review-details">
          <h6 className="review-title">{name}</h6>
          <p>
            <small>
              Price: <span>${price}</span>
            </small>
          </p>
          <p>
            <small>
              Quantity: <span> {quantity}</span>
            </small>
          </p>
        </div>
        <div>
          <button
            onClick={() => handleRemoveItem(_id)}
            className="delete-button"
          >
            <FontAwesomeIcon
              icon={faTrashAlt}
              className="delete-icon"
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
