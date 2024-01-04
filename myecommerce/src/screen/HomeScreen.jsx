// import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Message from "../components/Message";
import Loader from "../components/Loader";
// import axios from "axios";
// import products from "../components/products";

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  console.log(useGetProductsQuery());
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const { data } = await axios.get("http://localhost:5000/api/products/");
  //       setProducts(data);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  // return (
  //   <>
  //     <h1>Latest Products</h1>
  //     <Row>
  //       {products.map((product) => (
  //         <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
  //           <Product product={product} />
  //         </Col>
  //       ))}
  //     </Row>
  //   </>
  // );
  return (
    <>
      {isLoading ? (
       <Loader/>
      ) : error ? (
        <Message>{error?.data?.message || error.error}</Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
