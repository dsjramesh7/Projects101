import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImagesfromAPI = async (getURL) => {
    try {
      setLoading(true);
      const response = await fetch(`${getURL}??page=${page}&limit=${limit}`);
      const data = await response.json();
      // console.log(data);
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImagesfromAPI(url);
  }, []);

  if (loading) {
    return <h1>Loading Data.... !</h1>;
  }

  if (errorMsg !== null) {
    return <h1>Error Occured --- {errorMsg} </h1>;
  }
  console.log("imaeg", images);
  return (
    <div className="container border border-red-500">
      <BsArrowLeftCircleFill />
      {images && images.length > 0
        ? images.map((img) => (
            <img
              key={img.id}
              src={img.download_url}
              alt={img.download_url}
              className="h-1/2"
            />
          ))
        : null}
      <BsArrowRightCircleFill />
      <span>
        {
          images && images.length>0 ? (images.map(imageItem=>)):null
        }
      </span>
    </div>
  );
};

export default ImageSlider;
