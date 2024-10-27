import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../../redux/features/CartSlice";

const ProductsInfo = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const products = useSelector((state) => state.product.data); // Get all products from Redux
  const dispatch = useDispatch();
  const addingToCart = (product) => {
    dispatch(addToCart(product));
  };

  // Find the specific product by its ID
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="max-w-[800px] mx-auto p-5">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={product.images[1] ? product.images[1] : product.images[0]}
            alt={product.title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <div className="card-actions justify-end">
            {/* You can add more actions like Add to Cart here */}
            <Link to='/cart'
              onClick={() => addingToCart(product)}
              className="btn btn-outline btn-warning"
            >
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsInfo;
