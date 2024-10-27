import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { remove, totalPrice } from "../../redux/features/CartSlice";
import { Link } from "react-router-dom";

const Carts = () => {
  const cartProducts = useSelector((state) => state.cart);
  console.log(cartProducts);
  const dispatch = useDispatch();

  const totalPrice = cartProducts.reduce((sum, current) => (sum +current.price), 0);

  console.log("total",totalPrice)
  const DeleteCarts = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div>
      {cartProducts.length > 0 ? (
        <div className="max-w-[1400px] mx-auto">
          {cartProducts.map((c) => (
            <div key={c.id}>
              <div className="overflow-x-auto">
                <table className="table">
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={c.images}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{c.title}</div>
                            <div className="text-sm opacity-50">
                              United States
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {c.description.split(" ").slice(0, 10).join(" ")}
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          Happy shoping
                        </span>
                      </td>
                      <td>$ {c.price}</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">
                          <MdDelete
                            onClick={() => DeleteCarts(c.id)}
                            className="h-6 w-6 text-red-500"
                          ></MdDelete>
                        </button>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="text-4xl text-center"> 
        <h1>Your Carts is empty  </h1>
        <p className="text-sm">Please Go to Products </p>
        <Link className="btn btn-outline btn-warning" to='/products'>go to products</Link>
        </div>
      )}
     
      {
        cartProducts.length > 0 ?
        <div> <h1 className="mt-20 text-red-500 text-4xl text-center">Total Price : $ {totalPrice}</h1>
        
         </div>:
        " "

      }

    </div>
  );
};

export default Carts;
