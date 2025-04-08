"use client";
import React, { JSX, useState, useEffect } from "react";

// internal imports

import CartIcon from "@/public/assets/images/icon-add-to-cart.svg";
import Increment from "@/public/assets/images/icon-increment-quantity.svg";
import Decrement from "@/public/assets/images/icon-decrement-quantity.svg";

// Interface

// interface AddToCartButtonProps {
//   handleIncrement: (q: number) => void;
//   handleDecrement: (q: number) => void;
//   onClick: () => void;
// }

interface AddToCartButtonProps {
  productId: string;
}

// Styles

const styles = {
  addToCartButtonStyles:
    "bg-[var(--rose-50)] flex justify-between items-center gap-[0.3rem] text-[var(--rose-900)] border-[1px] border-rounded border-[var(--rose-500)] px-[1.8rem] py-[0.8rem] rounded-full w-full cursor-pointer hover:bg-[var(--rose-100)] transition ease-in-out duration-300",

  incDecButtonStyles:
    "border-[1px] border-[var(--rose-50)] rounded-full w-[1.2rem] h-[1.2rem] p-[0.2rem] flex justify-center items-center cursor-pointer",

  buttonText: "font-semibold text-[0.8rem]",

  cartIcon: "w-[0.8rem]",
};

function usePersistentQuantity(key: string, initialValue: number) {
  const [quantity, setQuantity] = useState<number>(initialValue);

  useEffect(() => {
    const stored = localStorage.getItem(key);
    if (stored) setQuantity(parseInt(stored));
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, quantity.toString());
  }, [key, quantity]);

  return [quantity, setQuantity] as const;
}

// FC
export default function AddToCartButton({
  productId,
}: AddToCartButtonProps): JSX.Element {
  const [quantity, setQuantity] = usePersistentQuantity(productId, 0);

  /*
  const handleIncrement = (q: number) => {
    setQuantity(q + 1);
  };
  const handleDecrement = (q: number) => {
    setQuantity(Math.max(0, q - 1));
  };
  */

  const handleIncrement = () => {
    setQuantity((q) => q + 1);
  };
  const handleDecrement = () => {
    setQuantity((q) => Math.max(0, q - 1));
  };

  return (
    <>
      {!(quantity === 0) && (
        <div className="bg-[var(--red)] flex justify-between items-center w-full px-[1rem] py-[0.8rem] rounded-full">
          <button
            className={styles.incDecButtonStyles}
            // onClick={() => handleDecrement(quantity)}
            onClick={handleDecrement}
          >
            <Decrement />
          </button>
          <span>{quantity}</span>

          <button
            className={styles.incDecButtonStyles}
            // onClick={() => handleIncrement(quantity)}
            onClick={handleIncrement}
          >
            <Increment />
          </button>
        </div>
      )}

      {quantity === 0 && (
        <button
          className={styles.addToCartButtonStyles}
          // onClick={() => handleIncrement(quantity)}
          onClick={handleIncrement}
        >
          <span className={styles.cartIcon}>
            <CartIcon />
          </span>
          <span className={styles.buttonText}>Add to Cart</span>
        </button>
      )}
    </>
  );
}
