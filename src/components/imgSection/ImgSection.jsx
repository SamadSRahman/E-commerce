import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  displayImgAtom,
  imgAtom,
  imgCountAtom,
  dataAtom,
  colorIndexAtom,
  selectedIdAtom,
  showImgAtom,
} from "../../atoms/atoms";
import styles from "./imgSection.module.css";

export default function ImgSection() {
  const selectedId = useRecoilValue(selectedIdAtom);
  const productData = useRecoilValue(dataAtom);
  const colorIndex = useRecoilValue(colorIndexAtom);
  const [img, setImg] = useRecoilState(imgAtom);
  const [displayImg, setDisplayImg] = useRecoilState(displayImgAtom);
  const [imgCount, setImgCount] = useRecoilState(imgCountAtom);
  const [timeOutId, setTimeOutId] = useState(null);
  const [showImg, setShowImg] = useRecoilState(showImgAtom)

  // function startImageChange() {
  //   const timeout = setTimeout(() => {
  //     if (imgCount < img.length - 1) setImgCount(imgCount + 1);
  //     else setImgCount(0);
  //   }, 3000);

  //   setTimeOutId(timeout);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }
  // useEffect(() => {
  //   startImageChange();
  // }, [imgCount]);

  // const handleStopCounter = () => {
  //   clearTimeout(timeOutId);
  // };

  useEffect(() => {
    if (productData.length > 0) {
      setImg(productData[selectedId].style[colorIndex].img);
    }
  }, [productData, imgCount, selectedId]);

  useEffect(() => {
    if (productData.length > 0) {
      setDisplayImg(productData[selectedId].style[colorIndex].img[imgCount]);
    }
  }, [imgCount, selectedId, colorIndex, productData]);

  function handleNextImg() {
    if (imgCount < img.length - 1) setImgCount(imgCount + 1);
    else setImgCount(0);
  }
  function handlePrevImg() {
    if (imgCount > 0) setImgCount(imgCount - 1);
    else setImgCount(img.length - 1);
  }
  return (
    <div className={styles.container}>
      <div className={styles.thumbnails}>
        {img.map((img, index) => (
          <img
            key={index}
            className={styles.thumbnailsImg}
            onClick={() => {
              setImgCount(index);
            }}
            src={img}
          ></img>
        ))}
      </div>
      <div className={styles.leftSection}>
        <button className={styles.imgBtn} onClick={handlePrevImg}>
          ◀
        </button>
        <div>
          <div className={styles.imgDiv}
          style={showImg ? {} : { display: 'none' }}
          >
            <h4
              onClick={()=>setShowImg(false)}
            >❌</h4>
          <img
              className={styles.bigImage}
              style={showImg ? { opacity: '1' } :{}}
            src={displayImg}  alt="product img" />
          </div>
          <img
            className={styles.displayImg}
            onClick={() => {
              setShowImg(!showImg)
            
            }}
       
            src={displayImg}
          ></img>
        </div>
        <button className={styles.imgBtn} onClick={handleNextImg}>
          ▶
        </button>
      </div>
    </div>
  );
}
