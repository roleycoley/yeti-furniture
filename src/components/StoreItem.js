import { withTheme } from "@material-ui/core";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

export default function CartItem({ id, imgUrl, name, price }) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <div className="furniture-item">
      <div style={{ height: "252px", overflow: "hidden", textAlign: "center" }}>
        <img src={imgUrl} alt={name} />
      </div>
      <div>
        
      </div>
      <div className="item-info">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="label">{name}</div>
          <div className="label" style={{ color: "gray", fontSize: "20px" }}>
            {formatCurrency(price)}
          </div>
        </div>
        {quantity === 0 ? (

            <button
              className="yeti-style"
              style={{
                height: "40px",
                width: "90%",
                fontSize: "12px",
              }}
              onClick={() => increaseCartQuantity(id)}
            >
              + Add To Cart
            </button>

        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="items-in-cart-buttons">
              <button
                className="yeti-style"
                style={{ width: "30px", height: "30px" }}
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </button>

              <div>
                {quantity} <span style={{ color: "gray" }}>in cart</span>
              </div>

              <button
                className="yeti-style"
                style={{ width: "30px", height: "30px" }}
                onClick={() => increaseCartQuantity(id)}
              >
                +
              </button>

              <button
                className="yeti-style"
                style={{ height: "40px", width: "80px" }}
                onClick={() => removeFromCart(id)}
              >
                Remove
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
