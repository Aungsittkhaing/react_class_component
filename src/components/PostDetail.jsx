import React, { Component } from "react";
import UserImg from "./images/profie.svg";
import { Link, useLocation } from "react-router-dom";
export class PostDetail extends Component {
  render() {
    const post = this.props.state.state.post;
    return (
      <div>
        <Link to={"/"}>
          <button className="btn btn-primary btn-sm mb-2">
            <i className="bi bi-arrow-left-circle"></i>
          </button>
        </Link>
        <div className="card">
          <img src={UserImg} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.desc}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default (props) => {
  const state = useLocation();
  return <PostDetail {...props} state={state} />;
};
