import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { cartItems } = useShoppingCart();

  return (
    <div className="cart">
      <div className="cart__header">
        <p className="cart__title">Cart</p>
      </div>
      <div className="cart__body">
        <ul className="cart__items">
          {/* Check if cart is empty */}
          {Array.isArray(cartItems) && !cartItems.length ? (
            <p>No Items In Your Cart.</p>
          ) : (
            cartItems.map((item) => <CartItem key={item.id} {...item} />)
          )}
        </ul>
      </div>
    </div>
  );
}
