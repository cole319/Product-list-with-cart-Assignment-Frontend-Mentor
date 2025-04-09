"use client";
import { useEffect } from "react";
import { useModal } from "./context/ModalContext";
import DessertList from "./components/DessertList";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Modal from "./components/Modal";

export default function Home() {
  const { open } = useModal();
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);
  return (
    <main
      className={`relative flex flex-col min-h-screen bg-[var(--rose-100)] font-[var(--font-display)]`}
    >
      {/* <div className="w-[30%] max-h-[80vh] overflow-y-auto bg-[var(--rose-50)] p-[2rem] text-[var(--rose-900)] rounded-xl flex flex-col justify-center"> */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 flex justify-center items-center p-4 ${
          open ? "flex" : "hidden"
        } overflow-auto`}
      >
        <Modal />
      </div>

      <div className="flex p-[1rem] md:p-[2rem] lg:py-[8rem] lg:px-[8rem] items-start">
        <section className="flex flex-col w-70%]">
          <h1 className="text-[2rem] text-[var(--rose-900)] font-[var(--ultrabold)] pb-[2rem]">
            Desserts
          </h1>
          <div>
            <DessertList />
          </div>
        </section>

        <section className="pl-[2rem] flex justify-center items-center w-[30%]">
          <Cart />
        </section>
      </div>

      <Footer />
    </main>
  );
}

// useEffect(() => {
//   if (open) {
//     document.body.classList.add("overflow-hidden");
//   } else {
//     document.body.classList.remove("overflow-hidden");
//   }
//   return () => {
//     document.body.classList.remove("overflow-hidden");
//   };
// }, [open]);
