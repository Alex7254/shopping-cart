import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";

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
        {/* Check if cart is empty */}
        {Array.isArray(cartItems) && !cartItems.length ? (
          <p>No Items In Your Cart.</p>
        ) : (
          <div>
            <ul className="cart__items">
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </ul>
            <div>
              Cart Total:{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
