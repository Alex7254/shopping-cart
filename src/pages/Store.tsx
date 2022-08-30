// data
import StoreItems from "../data/items.json";
// components
import { StoreItem } from "../components/StoreItem";

export function Store() {
  return (
    <>
      <div>Store</div>
      <ul className="store-items">
        {StoreItems.map((item) => (
          <li key={item.id}>
            <StoreItem {...item}/>
          </li>
        ))}
      </ul>
    </>
  );
}
