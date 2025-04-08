import React, { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-[var(--rose-50)] text-center text-[0.8rem] text-[var(--rose-900)] py-[4rem] md:px-[4rem] px-[2rem]">
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        className="text-[var(--green)] hover:underline"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://www.github.com/cole319"
        target="_blank"
        className="text-[var(--green)] hover:underline"
      >
        Suryarghya
      </a>
      .
    </footer>
  );
}
