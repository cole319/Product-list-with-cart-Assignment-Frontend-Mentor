"use client";
import React, { JSX } from "react";
import { useCart } from "@/app/context/CartContext";

// internal imports

import CartIcon from "@/public/assets/images/icon-add-to-cart.svg";
import Increment from "@/public/assets/images/icon-increment-quantity.svg";
import Decrement from "@/public/assets/images/icon-decrement-quantity.svg";

// Styles

const styles = {
  addToCartButtonStyles:
    "bg-[var(--rose-50)] flex justify-between items-center gap-[0.1rem] text-[var(--rose-900)] border-[1px] border-[var(--rose-500)] px-[1.8rem] py-[0.6rem] rounded-full w-full cursor-pointer hover:bg-[var(--rose-100)] transition ease-in-out duration-300",

  incDecButtonStyles:
    "border-[1px] border-[var(--rose-50)] rounded-full w-[1.2rem] h-[1.2rem] p-[0.2rem] flex justify-center items-center cursor-pointer",

  buttonText: "font-semibold text-[0.7rem]",

  cartIcon: "w-fit",
};

// Interface

interface AddToCartButtonProps {
  productId: string;
  name: string;
  price: number;
  thumb_image: string;
}

// FC
export default function AddToCartButton({
  productId,
  name,
  price,
  thumb_image,
}: AddToCartButtonProps): JSX.Element {
  const { cart, addToCart, removeFromCart } = useCart();

  const item = cart.find((i) => i.id === productId);
  const quantity = item?.quantity || 0;

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {!(quantity === 0) && (
        <div className="bg-[var(--red)] flex justify-between items-center w-full px-[1rem] py-[0.6rem] rounded-full">
          <button
            className={styles.incDecButtonStyles}
            onClick={() =>
              removeFromCart({ id: productId, name, price, thumb_image })
            }
          >
            <Decrement />
          </button>
          <span>{quantity}</span>

          <button
            className={styles.incDecButtonStyles}
            onClick={() =>
              addToCart({ id: productId, name, price, thumb_image })
            }
          >
            <Increment />
          </button>
        </div>
      )}

      {quantity === 0 && (
        <button
          className={styles.addToCartButtonStyles}
          onClick={() => addToCart({ id: productId, name, price, thumb_image })}
        >
          <span className={styles.cartIcon}>
            <CartIcon />
          </span>
          <span className={styles.buttonText}>Add to Cart</span>
        </button>
      )}
    </>
  );
}

/*
  const handleIncrement = (q: number) => {
    setQuantity(q + 1);
  };
  const handleDecrement = (q: number) => {
    setQuantity(Math.max(0, q - 1));
  };
  */

// interface AddToCartButtonProps {
//   handleIncrement: (q: number) => void;
//   handleDecrement: (q: number) => void;
//   onClick: () => void;
// }

// const orderTotal = cart.reduce(
//   (sum, item) => sum + item.price * item.quantity,
//   0
// );

// const handleIncrement = () => {
//   setQuantity((q) => q + 1);
// };
// const handleDecrement = () => {
//   setQuantity((q) => Math.max(0, q - 1));
// };

// const handleQuantity = () => {
//   const item = cart.find((i) => i.id === productId);
//   const itemCount = item?.quantity;
//   if (typeof itemCount !== undefined) {
//     setItemCount((itemCount) => itemCount);
//   } else {
//     setItemCount(0);
//   }
// };

// const [itemCount, setItemCount] = useState(0);
// const [quantity, setQuantity] = usePersistentQuantity(productId, itemCount);

// function usePersistentQuantity(key: string, initialValue: number) {
//   const [quantity, setQuantity] = useState<number>(initialValue);

//   useEffect(() => {
//     const stored = localStorage.getItem(key);
//     if (stored) setQuantity(parseInt(stored));
//   }, [key]);

//   useEffect(() => {
//     localStorage.setItem(key, quantity.toString());
//   }, [key, quantity]);

//   return [quantity, setQuantity] as const;
// }
// const handleAdd = () => {
//   addToCart({ id: productId, name: name, price: price });
//   // handleQuantity();
// };

// const handleRemove = () => {
//   removeFromCart({ id: productId, name: name, price: price });
//   // handleQuantity();
// };

// onClick={() => handleDecrement(quantity)}
// onClick={handleRemove}

// onClick={() => handleIncrement(quantity)}
// onClick={handleAdd}

// onClick={() => handleIncrement(quantity)}
// onClick={handleIncrement}
