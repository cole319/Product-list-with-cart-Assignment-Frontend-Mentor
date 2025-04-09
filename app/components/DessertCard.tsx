import React, { JSX } from "react";
import Image from "next/image";

// Internal imports
import AddToCartButton from "./AddToCartButton";

interface DessertCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  d_image: string;
  m_image: string;
  tab_image: string;
  thumb_image: string;
}

export default function DessertCard({
  id,
  name,
  description,
  price,
  d_image,
  m_image,
  tab_image,
  thumb_image,
}: DessertCardProps): JSX.Element {
  return (
    <div className="group bg-transparent relative flex flex-col justify-content border-none h-fit">
      <Image
        src={d_image}
        width={200}
        height={200}
        alt={`${name} image`}
        className="w-full rounded-xl border-[2px] group-hover:border-[var(--red)] transition ease-in-out duration-300"
      />
      <div className="text-black flex flex-col justify-start items-start pt-[2.5rem]">
        <h1 className="text-[0.9rem] text-[var(--rose-400)]">{name}</h1>
        <p className="text-[var(--rose-900)] font-bold">{description}</p>
        <p className="text-[var(--red)] font-semibold">
          <span>$</span>
          {price.toFixed(2)}
        </p>
      </div>
      <div className="absolute w-[60%] left-[20%] right-[20%] top-[60%]">
        <AddToCartButton
          productId={id}
          name={name}
          price={price}
          thumb_image={thumb_image}
        />
      </div>
    </div>
  );
}
