import React from "react";
import {PhotoSwipeGallery} from "react-photoswipe";
import 'react-photoswipe/lib/photoswipe.css';

import projects from "../projects/projects";

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        history: false
      }
    }
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  getThumbnailContent = (item) => {
    return (
      <img src={item.src} height={176} />
    );
  }

  render() {
    return (
      <div className="content-container">
        <PhotoSwipeGallery
        items={projects}
        thumbnailContent={this.getThumbnailContent}
        options={this.state.options}
        onClose={this.handleClose}
        />
      </div>
    )
  }
};