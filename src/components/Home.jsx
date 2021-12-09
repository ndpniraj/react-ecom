import axios from "axios";
import React, { useEffect, useState } from "react";
import FeaturedTitle from "./FeaturedTitle";
import ProductList from "./ProductList";
import Slider from "./Slider";

export default function Home() {
  const [ladiesShoes, setLadiesShoes] = useState([]);
  const [gentsShoes, setGentsShoes] = useState([]);
  const [smartWatches, setSmartWatches] = useState([]);

  const fetchFeaturedProducts = async () => {
    const { data } = await axios.get("http://localhost:4545/featured");
    const { ladiesShoes, gentsShoes, watches } = data.products;
    setGentsShoes(gentsShoes);
    setLadiesShoes(ladiesShoes);
    setSmartWatches(watches);
  };

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  return (
    <>
      <Slider />
      <div className="xl:px-0 px-2">
        <FeaturedTitle className="py-3" text="Featured Products" />
        <div className="sm:flex justify-between items-center sm:space-x-5 space-x-0 sm:space-y-0 space-y-3">
          <div className="sm:w-2/4">
            <div className="aspect-w-16 aspect-h-9">
              <img src="./images/banner_left.png" alt="" />
            </div>
          </div>
          <div className="sm:w-2/4">
            <div className="aspect-w-16 aspect-h-9">
              <img src="./images/banner_right.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <ProductList heading="Smart Watches" data={smartWatches} />
      <ProductList heading="Ladies Shoes" data={ladiesShoes} />
      <ProductList heading="Gents Shoes" data={gentsShoes} />
    </>
  );
}
