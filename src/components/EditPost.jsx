import React, { Component } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export class EditPost extends Component {
  constructor(props) {
    super(props);
    const post = this.props.state.state.post;
    this.state = {
      id: post.id,
      title: post.title,
      desc: post.desc,
    };
  }
  updatePost(e) {
    e.preventDefault();
    this.props.updatePost(this.state);
    this.props.navigate("/");
  }
  render() {
    return (
      <div className="card px-5 bg-dark text-white mt-3">
        <h3 className="text-center mt-2">Edit Post</h3>
        <div className=""></div>
        <form onSubmit={this.updatePost.bind(this)}>
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
              Update
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default (props) => {
  let navigate = useNavigate();
  let state = useLocation();
  return <EditPost {...props} navigate={navigate} state={state} />;
};
