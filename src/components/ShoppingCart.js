import CartItem from "./CartItem"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"

export default function ShoppingCart({isOpen})
{
    const { closeCart, cartItems, removeAllFromCart } = useShoppingCart()



    return (
        <>
            <div className={isOpen ? "shopping-cart active" : "shopping-cart"}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <div style={{fontSize:'20px', letterSpacing: '1px'}}>Cart</div>
                    <button className="close-cart-button" onClick={closeCart}>X</button>
                </div>
                {cartItems.map(item => (
                    <CartItem key={item.id} {...item} />
                ))}
                <div style={{display:'flex', gap:'20px', alignItems:'center'}}>
                {cartItems.length > 0 ? (
                    <>
                        <button 
                            className="checkout-buttons"
                            onClick={removeAllFromCart}
                        >
                            Checkout
                        </button>
                        <button 
                            onClick={removeAllFromCart}
                            className="checkout-buttons"
                        >
                            Remove All
                        </button>
                        <div style={{marginInlineStart:'auto'}}>
                            Total{" "}
                            {formatCurrency(
                            cartItems.reduce((total, cartItem) => {
                                const item = storeItems.find(i => i.id === cartItem.id)
                                return total + (item?.price || 0) * cartItem.quantity
                            }, 0)
                            )}
                        </div>
                    </>
                    ): 
                    <div>Your cart is empty.</div>
                }
                </div>
            </div>
            {isOpen && (<div onClick={closeCart} className="gray-cover"></div>)}
        </>


    )
}