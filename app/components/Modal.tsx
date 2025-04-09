"use client";
import React, { useState } from "react";
import ConfirmationIcon from "@/public/assets/images/icon-order-confirmed.svg";
import Button from "./Button";
import ModalItem from "./ModalItem";

import { desserts } from "../data/DessertsData";

export default function Modal() {
  const [orderTotal, setOrderTotal] = useState(0);
  const dessert = desserts[0];

  return (
    <div className="bg-black/50 flex flex-col justify-center items-center min-h-screen min-w-screen scroll-my-0">
      <div className="w-[30%] h-fit bg-[var(--rose-50)] p-[2rem] text-[var(--rose-900)] rounded-xl flex flex-col justify-center">
        <ConfirmationIcon />
        <h1 className="text-[2rem] font-extrabold pt-[1rem]">
          Order Confirmed
        </h1>
        <p className="text-[0.9rem] text-[var(--rose-500)] pb-[1rem]">
          We hope you enjoy your food!
        </p>
        <section>
          <ModalItem
            id={dessert.id}
            name={dessert.name}
            price={dessert.price}
            quantity={3}
            thumbnail={dessert.thumb_image}
          />
        </section>
        <div className="py-[1rem] px-[1rem] flex justify-between items-center bg-[var(--rose-100)] rounded-b-lg">
          <p className="text-[0.8rem] font-semibold text-[var(--rose-500)]">
            Order Total
          </p>
          <p className="font-bold text-[1.2rem]">${orderTotal.toFixed(2)}</p>
        </div>
        <div className="pt-[1.5rem]">
          <Button buttonName="Start New Order" />
        </div>
      </div>
    </div>
  );
}
