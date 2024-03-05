import React, { Component } from "react";
import PostCard from "./PostCard";
import { Link } from "react-router-dom";

export class Post extends Component {
  remove(id) {
    this.props.removePost(id);
  }
  render() {
    return (
      <div className="row">
        <div className="mb-2">
          <Link to={"/add"}>
            <button className="btn btn-primary float-end text-white">
              <i className="bi bi-plus-circle"></i>
            </button>
          </Link>
        </div>
        {this.props.posts.map((post) => (
          <PostCard key={post.id} post={post} remove={this.remove.bind(this)} />
        ))}
      </div>
    );
  }
}

export default Post;
