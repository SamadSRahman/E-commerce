import React, { useEffect, useState } from "react";
import {
  colorIndexAtom,
  dataAtom,
  displayImgAtom,
  imgAtom,
  imgCountAtom,
  selectedIdAtom,
} from "../../atoms/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import styles from "./descriptionSection.module.css";

export default function DescriptionSection() {
  const selectedId = useRecoilValue(selectedIdAtom)
  const [selectedSize, setSelectedSize] = useState(null);
  const [productData, setProductData] = useRecoilState(dataAtom);
  const [img, setImg] = useRecoilState(imgAtom);
  const [displayImg, setDisplayImg] = useRecoilState(displayImgAtom);
  const [imgCount, setImgCount] = useRecoilState(imgCountAtom);
  const [brand, setBrand] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [style, setStyle] = useState([]);
  const [color, setColor] = useState("");
  const [colorIndex, setColorIndex] = useRecoilState(colorIndexAtom);
    const [size, setSize] = useState([]);
    const [description, setDescription] = useState("")

  useEffect(() => {
    if (productData.length > 0) {
      setBrand(productData[selectedId].brand)
    setProductName(productData[selectedId].product)
    setProductPrice(productData[selectedId].price)
    setStyle(productData[selectedId].style)
      setColor(productData[selectedId].style[colorIndex].color)
      setDescription(productData[selectedId].style[colorIndex].description)
      setSize(productData[selectedId].style[colorIndex].size)
  }
  },[selectedId, productData])
  
  
  function handleSelectColor(index) {
    setColorIndex(index);
    setColor(style[index].color);
    setImg(productData[selectedId].style[index].img);
    setDisplayImg(img[imgCount]);
      setSize(productData[0].style[index].size);
      setDescription(productData[0].style[index].description)
  }

  function handleSizeChange(size) {
    setSelectedSize(size);
    setImgCount(0);
  }
  return (
    <div className={styles.container}>
      <h2> {brand}</h2>
      <h3>{productName}</h3>
      <h3 className={styles.priceTag}>₹ {productPrice}.00</h3>
      <h4>COLOR: {color} </h4>
      <div>
      {style.map((ele, index) => (
        <img
          onClick={() => handleSelectColor(index)}
          className={styles.colorImg}
          width={"70rem"}
          src={ele.img[0]}
          alt=""
        />
      ))}
     </div>
      <h4>Select Size(UK Size):</h4>
      <div>
      {size.map((ele) => (
        <button
          key={ele}
          className={`${styles.sizeBtn} ${
            selectedSize === ele ? styles.selected : ""
          }`}
          onClick={() => handleSizeChange(ele)}
        >
          {ele}
        </button>
      ))}
     </div>
          <div>
          <button className={styles.addBtn}>ADD TO BAG</button>
          </div>
          <h4>DESCRIPTION:</h4>
          <p className={styles.description}>{description}</p>
    </div>
  );
}
