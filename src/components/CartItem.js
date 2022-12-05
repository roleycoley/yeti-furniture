import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"

export default function CartItem({id, quantity})
{
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null
    return(
        <div class="cart-item" style={{display:'flex', alignItems:'center', gap:'10px', justifyContent:'space-between'}}>
            <div>
                <img 
                    src={item.imgUrl}
                    style={{ width: "125px", height: "75px", objectFit: "cover" }}
                />
            </div>
            <div style={{display:'flex', flexDirection:'column', marginInlineEnd:'auto'}}>
                <div>{item.name}</div>
                <div>{item.price}</div>
            </div>
            <div>{item.price * quantity}</div>
            <button>X</button>
        </div>
    )

}