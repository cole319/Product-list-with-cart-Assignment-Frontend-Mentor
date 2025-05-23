"use client";
import React, { JSX } from "react";
import { useCart } from "@/app/context/CartContext";

// internal imports

import CartIcon from "@/public/assets/images/icon-add-to-cart.svg";
import Increment from "@/public/assets/images/icon-increment-quantity.svg";
import Decrement from "@/public/assets/images/icon-decrement-quantity.svg";

// Styles

const styles = {
  addToCartButtonStyles:
    "bg-[var(--rose-50)] flex justify-between items-center gap-[0.1rem] text-[var(--rose-900)] border-[1px] border-[var(--rose-500)] px-[1.8rem] py-[0.6rem] rounded-full w-full cursor-pointer hover:bg-[var(--rose-100)] transition ease-in-out duration-300",

  incDecButtonStyles:
    "border-[1px] border-[var(--rose-50)] rounded-full w-[1.2rem] h-[1.2rem] p-[0.2rem] flex justify-center items-center cursor-pointer",

  buttonText: "font-semibold text-[0.7rem]",

  cartIcon: "w-fit",
};

// Interface

interface AddToCartButtonProps {
  productId: string;
  name: string;
  price: number;
  thumb_image: string;
}

// FC
export default function AddToCartButton({
  productId,
  name,
  price,
  thumb_image,
}: AddToCartButtonProps): JSX.Element {
  const { cart, addToCart, removeFromCart } = useCart();

  const item = cart.find((i) => i.id === productId);
  const quantity = item?.quantity || 0;

  return (
    <>
      {!(quantity === 0) && (
        <div className="bg-[var(--red)] flex justify-between items-center w-full px-[1rem] py-[0.6rem] rounded-full">
          <button
            className={styles.incDecButtonStyles}
            onClick={() =>
              removeFromCart({ id: productId, name, price, thumb_image })
            }
          >
            <Decrement />
          </button>
          <span>{quantity}</span>

          <button
            className={styles.incDecButtonStyles}
            onClick={() =>
              addToCart({ id: productId, name, price, thumb_image })
            }
          >
            <Increment />
          </button>
        </div>
      )}

      {quantity === 0 && (
        <button
          className={styles.addToCartButtonStyles}
          onClick={() => addToCart({ id: productId, name, price, thumb_image })}
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
