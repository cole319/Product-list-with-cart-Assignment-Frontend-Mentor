import AddToCartButton from "./components/AddToCartButton";
import DessertCard from "./components/DessertCard";
import DessertList from "./components/DessertList";
import Footer from "./components/Footer";
import { desserts } from "./data/DessertsData";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--rose-100)] ">
      <div className="flex p-[1rem] md:p-[2rem] lg:py-[8rem] lg:px-[10rem]">
        <section>
          <h1 className="text-[2rem] text-[var(--rose-900)] font-extrabold">
            Desserts
          </h1>
          <div>
            <DessertList />
          </div>
        </section>

        <section></section>
      </div>
      <Footer />
    </div>
  );
}
