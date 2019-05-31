import React, { Component } from 'react';

class ImageCard extends Component {
  render() {
    const { id, description, urls } = this.props.image;
    return (
      <div>
        <img key={id} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
