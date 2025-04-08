"use client";
import React, { JSX, useState, useEffect } from "react";

// internal imports

import CartIcon from "@/public/assets/images/icon-add-to-cart.svg";
import Increment from "@/public/assets/images/icon-increment-quantity.svg";
import Decrement from "@/public/assets/images/icon-decrement-quantity.svg";

// Interface

interface AddToCartButtonProps {
  handleIncrement: (q: number) => void;
  handleDecrement: (q: number) => void;
  onClick: () => void;
}

// Styles

const styles = {
  addToCartButtonStyles:
    "bg-[var(--rose-50)] flex justify-between items-center gap-[0.3rem] text-[var(--rose-900)] border-[1px] border-rounded border-[var(--rose-500)] px-[1.8rem] py-[0.8rem] rounded-full w-full cursor-pointer hover:bg-[var(--rose-100)] transition ease-in-out duration-300",

  incrementButtonStyles:
    "border-[1px] border-[var(--rose-50)] rounded-full w-[1.2rem] h-[1.2rem] p-[0.2rem] flex justify-center items-center cursor-pointer",

  decrementButtonStyles:
    "border-[1px] border-[var(--rose-50)] rounded-full w-[1.2rem] h-[1.2rem] p-[0.2rem] flex justify-center items-center cursor-pointer",
};

// FC
export default function AddToCartButton(): JSX.Element {
  const [quantity, setQuantity] = useState(0);
  useEffect;

  const handleIncrement = (q: number) => {
    setQuantity(q + 1);
  };
  const handleDecrement = (q: number) => {
    setQuantity(Math.max(0, q - 1));
  };

  return (
    <>
      {!(quantity === 0) && (
        <div className="bg-[var(--red)] flex justify-between items-center w-full px-[1rem] py-[0.8rem] rounded-full">
          <button
            className={styles.decrementButtonStyles}
            onClick={() => handleDecrement(quantity)}
          >
            <Decrement />
          </button>
          <span>{quantity}</span>

          <button
            className={styles.incrementButtonStyles}
            onClick={() => handleIncrement(quantity)}
          >
            <Increment />
          </button>
        </div>
      )}

      {quantity === 0 && (
        <button
          className={styles.addToCartButtonStyles}
          onClick={() => handleIncrement(quantity)}
        >
          <span className="w-[0.8rem]">
            <CartIcon />
          </span>
          <span className="font-semibold text-[0.8rem]">Add to Cart</span>
        </button>
      )}
    </>
  );
}
