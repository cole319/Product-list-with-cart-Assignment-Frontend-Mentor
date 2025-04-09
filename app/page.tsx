import DessertList from "./components/DessertList";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Modal from "./components/Modal";

export default function Home() {
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.classList.add("overflow-hidden");
  //   } else {
  //     document.body.classList.remove("overflow-hidden");
  //   }
  //   return () => {
  //     document.body.classList.remove("overflow-hidden");
  //   };
  // }, [isOpen]);

  return (
    <main
      className={`relative flex flex-col min-h-screen bg-[var(--rose-100)] font-[var(--font-display)]`}
    >
      {/* <div className="absolute z-2 h-full">
        <Modal />
      </div> */}

      <div className="flex p-[1rem] md:p-[2rem] lg:py-[8rem] lg:px-[8rem] items-start">
        <section className="flex flex-col w-70%]">
          <h1 className="text-[2rem] text-[var(--rose-900)] font-[var(--ultrabold)] pb-[2rem]">
            Desserts
          </h1>
          {/* <Modal /> */}
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
