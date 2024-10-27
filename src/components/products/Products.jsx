import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/features/CartSlice";
import { getProducts } from "../../redux/features/ProductSlice";
import { Link } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const addingToCart = (product) => {
    dispatch(addToCart(product));
  };

  const { data: products } = useSelector((state) => state.product);
  console.log("cloths data",products.length)

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-[1400px] mx-auto p-5 space-y-2">
        {products
          .filter((product) => product.images && product.images.length > 0)
          .slice(0, 20)
          .map((product) => (
            <div key={product.id}>
              <div className="card bg-base-100 p-2 shadow-xl">
                <figure>
                  <img
                    className="hover:scale-125 duration-300"
                    src={
                      product.images[1] ? product.images[1] : product.images[0]
                    }
                    
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {product.title.split(" ").slice(0, 3).join(" ")}...
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>
                    {product.description.split(" ").slice(0, 10).join(" ")}...
                    <Link to={`/productInfo/${product.id}`} className="text-red-500">
                      more info
                    </Link>
                  </p>
                  <div className="card-actions justify-between">
                    <div
                      onClick={() => addingToCart(product)}
                      className="btn btn-outline btn-warning"
                    >
                      $ {product.price}
                    </div>
                    <div to='/cart'
                      onClick={() => addingToCart(product)}
                      className="btn btn-outline btn-warning"
                    >
                      Add to Cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
