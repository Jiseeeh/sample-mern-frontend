import React from "react";

const Form: React.FC = () => {
  return (
    <section className="mb-4 form-control">
      <label className="label">
        <span className="label-text">Task title</span>
      </label>
      <label className="input-group">
        <span>Title</span>
        <input
          type="text"
          placeholder="School"
          className="input input-bordered"
        />
      </label>
      <label className="label">
        <span className="label-text">Task body</span>
      </label>
      <label className="input-group">
        <span>Body</span>
        <input
          type="text"
          placeholder="Calculus homework"
          className="input input-bordered"
        />
      </label>
      <button className="m-5 btn btn-ghost">Create</button>
    </section>
  );
};

export default Form;
