import React from "react";
import CartItem from "./CartItem";
import { useContext } from "react";
import { ItemContext } from "../App";

function Cart() {
  const context = useContext(ItemContext);

  const totalCartAmount = context.state.cart
    .reduce((total, item) => (total = total + item.price * item.count), 0)
    .toFixed(2);

  return (
    <div className="flex bg-[#ece8e8] px-40">
      <div className="w-full h-full mx-5">
        {console.log("Cart: ", context.state.cart)}
        {context.state.cart.map((item, index) => {
        //   console.log("CartItem:", item); // Log each item to the console

          return (
            <CartItem
              key={index}
              id={item._id}
              img={item.img}
              name={item.name}
              price={item.price}
              count={item.count}
              increase={context.increase}
              decrease={context.decrease}
            />
          );
        })}
      </div>
      <div className="bg-white w-[30%] m-5 p-5">
        <h1 className="text-xl text-center font-bold">Order Summary</h1>
        <div className="text-lg leading-10">
          <h3>Subtotal: {totalCartAmount}</h3>
          <h3>Shipping fee: 0</h3>
          <h3>Discount: 0</h3>
        </div>
        <h1 className="text-lg mb-5">Total : {totalCartAmount}</h1>
        <button className="bg-[#fe624c] text-white p-2 rounded-md">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
