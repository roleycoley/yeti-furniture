import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

export default function CartItem({ id, quantity }) {
  const { removeFromCart, getItemQuantity } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <div
      class="cart-item"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        justifyContent: "space-between",
      }}
    >
      <div>
        <img
          src={item.imgUrl}
          alt={item.name}
          style={{
            width: "125px",
            height: "75px",
            objectFit: "cover",
            boxShadow: "0 2px 5px 0 rgb(0,0,0, 0.1)",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginInlineEnd: "auto",
          gap: "5px",
        }}
      >
        <div>
          {item.name}{" "}
          <span style={{ color: "gray" }}>x{getItemQuantity(id)}</span>
        </div>
        <div style={{ color: "gray" }}>{formatCurrency(item.price)}</div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <button
        onClick={() => removeFromCart(item.id)}
        class="cart-remove-button"
      >
        X
      </button>
    </div>
  );
}
