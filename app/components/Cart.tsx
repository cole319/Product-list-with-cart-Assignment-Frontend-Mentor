"use client";
import React, { JSX, useMemo } from "react";
import { useCart } from "@/app/context/CartContext";
import { useModal } from "../context/ModalContext";

//internal imports
import EmptyCartImage from "@/public/assets/images/illustration-empty-cart.svg";
import CarbonNeutralIcon from "@/public/assets/images/icon-carbon-neutral.svg";
import Button from "./Button";
import CartItem from "./CartItem";

//Types
// import { CartItemType } from "../types/CartItemType";

export default function Cart(): JSX.Element {
  const { cart } = useCart();
  const { open, setOpen } = useModal();

  const totalQuantity = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );
  const orderTotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  return (
    <div className="bg-[var(--rose-50)] w-full h-fit text-[var(--red)] p-[1.5rem] rounded-xl flex flex-col justify-center gap-[1rem]">
      {/* This part will always be visible */}

      <h1 className="font-[700] text-[1.2rem]">
        Your Cart <span>(</span>
        <span>{totalQuantity}</span>
        <span>)</span>
      </h1>

      {/* This section will be visible only when totalQuantity === 0 */}
      {totalQuantity === 0 && (
        <section className="flex flex-col text-center items-center py-[1.5rem] gap-[1rem]">
          <div className="flex justify-center items-center">
            <EmptyCartImage />
          </div>

          <p className="text-[0.8rem]">Your added items will appear here</p>
        </section>
      )}

      {/* From this section upto the button will only be visible when totalQuantity > 0 */}
      {totalQuantity > 0 && (
        <section className="flex flex-col justify-center gap-[1rem]">
          <div>
            {/* <CartItem id="1" name="Name" price={5.6} quantity={2} /> */}
            {cart.map((cartItem) => (
              <div key={cartItem.id}>
                <CartItem
                  id={cartItem.id}
                  name={cartItem.name}
                  price={cartItem.price}
                  quantity={cartItem.quantity}
                  thumb_image={cartItem.thumb_image}
                />
              </div>
            ))}
          </div>

          <div>
            <div className="flex justify-between items-center px-[0.8rem] pb-[1rem]">
              <h2 className="text-[var(--rose-900)] text-[0.9rem] font-medium">
                Order Total
              </h2>
              <div className="flex justify-center items-center text-[1.5rem] text-[var(--rose-900)] font-bold">
                <span>$</span>
                <span>{orderTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-center items-center text-[0.8rem] gap-[0.4rem] py-[0.9rem] px-[1rem] bg-[var(--rose-50)] rounded-xl">
              <CarbonNeutralIcon />
              <p className="text-[var(--rose-900)] font-medium">
                This is a <span className="font-bold">carbon-neutral</span>{" "}
                delivery
              </p>
            </div>
          </div>

          <Button buttonName="Confirm Order" onClick={() => setOpen(true)} />
        </section>
      )}
    </div>
  );
}
