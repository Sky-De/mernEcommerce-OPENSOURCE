import NavBar from "../../components/NavBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Footer from "../../components/Footer";
import { LeftContent } from "./LeftContent";
import { RightContent } from "./RightContent";
import { useProductContext } from "../../contexts/productContext";

const ProductPage = () => {
  const { products } = useProductContext();

  const { id } = useParams();
  // const data = {
  //   id: 1,
  //   title: "The short sleeve hawthrone",
  //   price: 300,
  //   description: `When it's colder than the far side of the moon and spitting rain
  //     too, you've still got to look good. From water-repellent leather
  //     to a rugged outsole, the Lunar Force 1 adapts AF-1 style, so you
  //     can keep your flame burning when the weather hits`,
  //   category: "In For Strip",
  //   rating: 4.3,
  //   reviews: 67,
  // };

  const [data, setData] = useState();

  useEffect(() => {
    if (products) {
      const currentProduct = products.find((product) => product._id === id);
      setData(currentProduct);
    }
  }, [products]);

  return (
    <>
      <NavBar />
      {data ? (
        <div className="product_detail flex flex-col mx-4 mt-4 mb-10 font-Poppins md:flex-row xl:mx-32 xl:mt-8">
          <LeftContent data={data} />
          <RightContent data={data} />
        </div>
      ) : (
        <div className="text-5xl h-[50vh] text-center">
          Product Does not exist
        </div>
      )}

      <Footer />
    </>
  );
};

export default ProductPage;
