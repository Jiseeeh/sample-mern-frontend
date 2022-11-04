import React from "react";

interface CardProps {
  title: string;
  body: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="card md:w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <input
          type="text"
          placeholder={props.title}
          className="input font-bold w-full max-w-xs focus:outline-0"
        />
        <textarea className="textarea" placeholder={props.body}></textarea>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Update</button>
          <button className="btn btn-error">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
