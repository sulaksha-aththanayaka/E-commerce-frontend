import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useContext } from "react";
import { ItemContext } from "../App";
import { Link } from "react-router-dom";

function CartItem({ id, img, name, price, count }) {
  const context = useContext(ItemContext);
  return (
    <div className=" bg-white my-5 px-5 h-1/3 flex">
      <div className="flex items-center w-[60%] mr-10">
        <Link to={`/product/${id}`}>
          <div className="flex items-center">
            <div className="h-[50%] w-[30%] mx-5">
              <img src={`http://localhost:5000/uploads/${img}`} />
            </div>
            <div>
              <h1>{name}</h1>
              <p>{price}</p>
            </div>
          </div>
        </Link>
      </div>

      <div className="flex items-center my-5">
        <button onClick={() => context.decrease(id)}>
          <CiCircleMinus size={"40px"} color="#000" />
        </button>
        <h1 className="mx-5">{count}</h1>
        <button onClick={() => context.increase(id)}>
          <CiCirclePlus size={"40px"} color="#000" />
        </button>
        <button
          onClick={() => context.removeFromCart(id)}
          className="bg-[#fe624c] p-2 text-white mx-5 rounded-md hover:bg-[#e95642]"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
