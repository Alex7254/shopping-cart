// context
import { useShoppingCart } from "../context/ShoppingCartContext";
// data
import storeItems from "../data/items.json";
//utilities
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart, getItemQuantity } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  // If item doesn't exist
  if (item == null) return null;

  return (
    <li className="cart-item">
      <div className="cart-item__img">
        <img src={item.imgUrl} alt="" />
      </div>
      <div className="cart-item__body">
        <div className="cart-item__info">
          <p className="cart-item__name">{item.name}</p>
          <span className="cart-item__quantity">
            {getItemQuantity(item.id)} in Cart
          </span>
          <p className="cart-item__price">{formatCurrency(item.price)} Each</p>
        </div>
        <div className="cart-item__total">
          <p>Total: {formatCurrency(item.price * quantity)}</p>
        </div>
        <button onClick={() => removeFromCart(item.id)}>&times;</button>
      </div>
    </li>
  );
}
