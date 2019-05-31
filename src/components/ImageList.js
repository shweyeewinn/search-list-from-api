import React from 'react';
import './ImageList.css';

const ImageList = ({ images }) => {
  //   console.log(images);
  const imgs = images.map(image => {
    return (
      <img key={image.id} src={image.urls.regular} alt={image.description} />
    );
  });
  return <div className="image-list">{imgs}</div>;
};

export default ImageList;
