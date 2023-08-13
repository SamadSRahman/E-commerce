import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { dataAtom, imgCountAtom, selectedIdAtom } from "../../atoms/atoms";
import styles from "./productList.module.css";
export default function ProductList() {
  const [selectedId, setSelectedId] = useRecoilState(selectedIdAtom);
    const productData = useRecoilValue(dataAtom);
    const[imgCount, setImgCount] = useRecoilState(imgCountAtom)
  const remainingProducts = productData.filter((ele) => ele.id != selectedId);

  function handleProductChange(index) {
    setSelectedId(index);
    window.scroll(0, 0);
  }
  return (
    <div className={styles.container}>
      <h3>YOU MIGHT ALSO LIKE:</h3>
      <div className={styles.productList}>
        {remainingProducts.map((ele) => (
          <div
                onClick={() => {
                    handleProductChange(ele.id)
                    setImgCount(0)
                }}
            className={styles.productCard}
          >
            <img width={"85%"} src={ele.style[0].img[0]} alt="" />
            <h5>{ele.product}</h5>
            <span>₹{ele.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
