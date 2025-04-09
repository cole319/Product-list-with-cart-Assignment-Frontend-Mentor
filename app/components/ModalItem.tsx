import React, { JSX } from "react";
import Image from "next/image";
import { ModalItemType } from "../types/ModalItemType";

export default function ModalItem({
  id,
  name,
  price,
  quantity,
  thumbnail,
}: ModalItemType): JSX.Element {
  function getTotal(price: number, quantity: number): number {
    return parseFloat((price * quantity).toFixed(2));
  }

  const res: number = getTotal(price, quantity);

  return (
    <div className="flex items-center bg-[var(--rose-100)] border-b-[1px] border-[var(--rose-300)]/20 h-">
      <div className="w-[20%] py-[0.6rem] flex justify-center">
        <Image
          src={thumbnail}
          width={50}
          height={50}
          alt={`${name} image`}
          className="rounded-lg border-[2px] group-hover:border-[var(--red)] transition ease-in-out duration-300"
        />
      </div>
      <div className="w-[60%]">
        <h1 className="text-[0.8rem] font-bold">{name}</h1>
        <div className="flex text-[0.9rem] items-center gap-[1rem]">
          <p className="font-bold text-[var(--red)]">{quantity}x</p>
          <p className="text-[var(--rose-400)] font-semibold text-[0.8rem]">
            @${price.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="text-center w-[20%] font-semibold text-[var(--rose-900)] text-[0.9rem]">
        <span>$</span>
        {res.toFixed(2)}
      </div>
    </div>
  );
}
