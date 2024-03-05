import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

export class AddPost extends Component {
  state = {
    title: "",
    desc: "",
  };

  //using uuid while adding users
  addUser = (e) => {
    e.preventDefault();
    this.props.addNewPost({ id: uuid(), ...this.state });
    // console.log("Add User", this.state);
    this.state.title = "";
    this.state.desc = "";

    this.props.navigate("/");
  };

  render() {
    return (
      <div className="card px-5 bg-dark text-white mt-3">
        <h3 className="text-center mt-2">Add Post</h3>
        <div className=""></div>
        <form onSubmit={this.addUser}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Post Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter Post Title"
              onChange={(e) => this.setState({ title: e.target.value })}
              value={this.state.title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Post Description
            </label>
            <textarea
              className="form-control"
              id="desc"
              rows="3"
              onChange={(e) => this.setState({ desc: e.target.value })}
              value={this.state.desc}
            ></textarea>
          </div>
          <div className="">
            <button className="btn btn-primary btn-sm float-end mb-3">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default (props) => {
  const navigator = useNavigate();
  return <AddPost {...props} navigate={navigator} />;
};
