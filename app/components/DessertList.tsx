import React, { JSX } from "react";
import { desserts } from "../data/DessertsData";
import DessertCard from "./DessertCard";

export default function DessertList(): JSX.Element {
  return (
    <div className="grid max-sm:grid-cols-1 sm:max-lg:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]">
      {desserts.map((dessert) => (
        <div key={dessert.id}>
          <DessertCard
            id={dessert.id}
            name={dessert.name}
            description={dessert.description}
            price={dessert.price}
            d_image={dessert.d_image}
            m_image={dessert.m_image}
            tab_image={dessert.tab_image}
            thumb_image={dessert.thumb_image}
          />
        </div>
      ))}
    </div>
  );
}
