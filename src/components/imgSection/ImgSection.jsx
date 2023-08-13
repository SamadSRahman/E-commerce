import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import {
  displayImgAtom,
  imgAtom,
  imgCountAtom,
  dataAtom,
  colorIndexAtom,
  selectedIdAtom,
} from "../../atoms/atoms";
import styles from "./imgSection.module.css";

export default function ImgSection() {
  const selectedId = useRecoilValue(selectedIdAtom)
  const [productData, setProductData] = useRecoilState(dataAtom);
  const [colorIndex, setColorIndex] = useRecoilState(colorIndexAtom);
  const [img, setImg] = useRecoilState(imgAtom);
  const [displayImg, setDisplayImg] = useRecoilState(displayImgAtom);
  const [imgCount, setImgCount] = useRecoilState(imgCountAtom);

  // async function getData() {
  //   try {
  //     const response = await fetch("../data.json");
  //     const data = await response.json();
  //     setProductData(data);
  //     console.log("Data loaded", data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }

  // useEffect(() => {
  //   getData();

  // },[]); // Empty dependency array to run only once

  const timeOut = setTimeout(() => {
    if (imgCount < img.length - 1) setImgCount(imgCount + 1);
    else setImgCount(0);
  
  },5000)
  useEffect(() => {
    if (productData.length > 0) {
      setImg(productData[selectedId].style[colorIndex].img);
    }
  }, [productData, imgCount, selectedId]); // Listen for changes in 'shoes' state

  useEffect(() =>
  {
    if (productData.length > 0) {
      setDisplayImg(productData[selectedId].style[colorIndex].img[imgCount]);
    }
   }, [imgCount, selectedId, colorIndex])

  function handleNextImg() {
    // clearTimeout(timeOut)
    if (imgCount < img.length - 1) setImgCount(imgCount + 1);
    else setImgCount(0);
  }
  function handlePrevImg() {
    // clearTimeout(timeOut)
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
              // clearTimeout(timeOut)
            }}
            src={img}
          ></img>
        ))}
      </div>
      <div className={styles.leftSection}>
      <button className={styles.imgBtn} onClick={handlePrevImg}>◀</button>
      <div>
        <img className={styles.displayImg} src={displayImg}></img>
      </ div>
      <button className={styles.imgBtn} onClick={handleNextImg}>▶</button>
    </div>
    </div>
  );
}
