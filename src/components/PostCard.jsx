import React, { Component } from "react";
import ProfileImg from "./images/profie.svg";
import { Link } from "react-router-dom";

export class PostCard extends Component {
  //delete method with working UI
  delete() {
    this.props.remove(this.props.post.id);
  }
  render() {
    let post = this.props.post;

    return (
      <div className="card mb-2">
        <div className="row px-2">
          <div className="col-2 mt-2">
            <img src={ProfileImg} width={"55px"} height={"55px"} />
          </div>
          <div className="col-5">
            <h4 className="text-">{post.title}</h4>
            <p>{post.desc}</p>
          </div>
          <div className="col-5 mt-4">
            <Link to={`/post/${post.id}`} state={{ post: post }}>
              <button className="btn btn-primary btn-sm me-1">
                <i className="bi bi-eye-fill"></i>
              </button>
            </Link>

            <Link to={`/post/edit/${post.id}`} state={{ post: post }}>
              <button className="btn btn-warning btn-sm me-1">
                <i className="bi bi-pencil"></i>
              </button>
            </Link>

            <button
              className="btn btn-danger btn-sm"
              onClick={this.delete.bind(this)}
            >
              <i className="bi bi-trash3"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCard;
