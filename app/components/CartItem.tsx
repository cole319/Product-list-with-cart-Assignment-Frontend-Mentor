import React, { JSX } from "react";
import { useCart } from "@/app/context/CartContext";

//internal imports
import { CartItemType } from "../types/CartItemType";

interface CartItemProps {
  onClick: () => void;
}

export default function CartItem({
  id,
  name,
  price,
  quantity,
}: CartItemType): JSX.Element {
  //Calculate total price of single product category
  const { cart, removeOrder } = useCart();

  function getTotal(price: number, quantity: number): number {
    return parseFloat((price * quantity).toFixed(2));
  }

  const res: number = getTotal(price, quantity);

  return (
    <div className="flex justify-between items-center border-b-[1.5px] border-[var(--rose-100)] py-[0.8rem] text-[1rem] hover:border-[var(--rose-300)]">
      <div className="flex flex-col gap-[0.2rem]">
        <h1 className="font-bold text-[var(--rose-900)] ">{name}</h1>
        <div className="flex text-[0.9rem] items-center gap-[1.5rem]">
          <p className="font-bold">{quantity}x</p>
          <div className="flex items-center gap-[0.5rem]">
            <p className="text-[var(--rose-400)] font-semibold">
              @${price.toFixed(2)}
            </p>
            <p className="font-bold text-[var(--rose-500)]">
              ${res.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      <button
        className="h-[1.2rem] w-[1.2rem] border-[1.5px] rounded-full flex justify-center items-center text-[var(--rose-300)] border-[var(--rose-300)] hover:cursor-pointer hover:border-[var(--red)] hover:text-[var(--red)]"
        onClick={() => removeOrder({ id: id, name, price })}
      >
        X
      </button>
    </div>
  );
}
