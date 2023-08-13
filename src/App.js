import { useState, useEffect } from "react";
import "./App.css";
import ImgSection from "./components/imgSection/ImgSection";
import DescriptionSection from "./components/descriptionSection/DescriptionSection";
import { useRecoilState } from "recoil";
import getData, { dataAtom, imgAtom, imgCountAtom, displayImgAtom } from "./atoms/atoms";
import ProductList from "./components/productList/ProductList";

function App() {
  const [productData, setProductData] = useRecoilState(dataAtom);
  const [img, setImg] = useRecoilState(imgAtom);
  const [imgCount, setImgCount] = useRecoilState(imgCountAtom);
  const [displayImg, setDisplayImg] = useRecoilState(displayImgAtom);

  useEffect(() => {
    fetch('../data.json')
      .then((res) => res.json())
      .then((data) => localStorage.setItem('productData', JSON.stringify(data)))
    const temp = getData()
    setProductData(temp)
    console.log(productData)
  },[])


  return (
    <div className="App">
      <div className="upperSection">
      <ImgSection />
      <DescriptionSection />
      </div>
      <ProductList/>
    </div>
  );
}

export default App;
