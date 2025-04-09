"use client";
import React, { useMemo } from "react";
import { useCart } from "@/app/context/CartContext";
import { useModal } from "@/app/context/ModalContext";
import ConfirmationIcon from "@/public/assets/images/icon-order-confirmed.svg";
import Button from "./Button";
import ModalItem from "./ModalItem";

export default function Modal() {
  const { cart, clearCart } = useCart();
  const { open, setOpen } = useModal();

  const orderTotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  const handleSetOpen = () => {
    setOpen(false);
    clearCart();
  };

  return (
    <div className="w-full max-w-md bg-[var(--rose-50)] rounded-xl p-6 overflow-y-auto max-h-[90vh] text-[var(--rose-900)]">
      <ConfirmationIcon />
      <h1 className="text-[2rem] font-extrabold pt-[1rem]">Order Confirmed</h1>
      <p className="text-[0.9rem] text-[var(--rose-500)] pb-[1rem]">
        We hope you enjoy your food!
      </p>
      <section>
        {cart.map((cartItem) => (
          <div key={cartItem.id}>
            <ModalItem
              id={cartItem.id}
              name={cartItem.name}
              price={cartItem.price}
              quantity={cartItem.quantity}
              thumb_image={cartItem.thumb_image}
            />
          </div>
        ))}
      </section>
      <div className="py-[1rem] px-[1rem] flex justify-between items-center bg-[var(--rose-100)] rounded-b-lg">
        <p className="text-[0.8rem] font-semibold text-[var(--rose-500)]">
          Order Total
        </p>
        <p className="font-bold text-[1.2rem]">${orderTotal.toFixed(2)}</p>
      </div>
      <div className="pt-[1.5rem]">
        <Button buttonName="Start New Order" onClick={handleSetOpen} />
      </div>
      {/* </div> */}
    </div>
  );
}
