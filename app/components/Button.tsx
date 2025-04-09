import React, { JSX } from "react";

interface ButtonProps {
  buttonName: string;
  onClick?: () => void;
}

export default function Button({
  buttonName,
  onClick,
}: ButtonProps): JSX.Element {
  return (
    <button
      className="w-full bg-[var(--red)] text-[var(--rose-50)] font-medium rounded-full py-[0.7rem] px-[0.8rem] cursor-pointer border-[1px] border-[var(--red)] hover:bg-[var(--rose-100)] hover:text-[var(--red)] transition ease-in-out duration-300"
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
}
