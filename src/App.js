import { useState, useEffect } from "react";
import "./App.css";
import ImgSection from "./components/imgSection/ImgSection";
import DescriptionSection from "./components/descriptionSection/DescriptionSection";
import { useRecoilState, useRecoilValue } from "recoil";
import  { dataAtom, imgAtom, imgCountAtom, displayImgAtom, showImgAtom } from "./atoms/atoms";
import ProductList from "./components/productList/ProductList";
import axios from "axios";

function App() {
  const [productData, setProductData] = useRecoilState(dataAtom);

  const showImg = useRecoilValue(showImgAtom)

  
    async function getData() {
      try {
        const response = await axios.get('../data.json');
       setProductData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  useEffect(() => {
      getData()
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
