import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  let quantity = getItemQuantity(id);

  return (
    <div className="store-item">
      <img src={imgUrl} className="store-item__img" />
      <div className="store-item__body">
        <div className="store-item__title">
          <span className="store-item__name">{name}</span>
          <span className="store-item__price">{formatCurrency(price)}</span>
        </div>
        <div className="store-item__quantity">
          {quantity === 0 ? (
            <button onClick={() => increaseCartQuantity(id)}>Add to cart</button>
          ) : (
            <div>
              <div>
                <button onClick={() => decreaseCartQuantity(id)}>-</button>
                <div>
                  <span>{quantity}</span> in cart
                </div>
                <button onClick={() => increaseCartQuantity(id)}>+</button>
              </div>
              <button onClick={() => removeFromCart(id)}>Remove items</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
