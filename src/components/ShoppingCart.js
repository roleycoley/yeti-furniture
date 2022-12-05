import CartItem from "./CartItem"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"

export default function ShoppingCart({isOpen})
{
    const { cartItems } = useShoppingCart()

    return (
        <div className="shopping-cart">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <div style={{fontSize:'20px'}}>Cart</div>
                <button style={{background:'white',color:'gray', fontSize:'25px', border:'none'}}>X</button>
            </div>
            {cartItems.map(item => (
                <CartItem key={item.id} {...item} />
            ))}
        </div>
    )
}