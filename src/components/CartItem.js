import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"

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
                    alt={item.name}
                    style={{ width: "125px", height: "75px", objectFit: "cover" }}
                />
            </div>
            <div style={{display:'flex', flexDirection:'column', marginInlineEnd:'auto'}}>
                <div>{item.name}</div>
                <div style={{color:'gray'}}>{formatCurrency(item.price)}</div>
            </div>
            <div>{formatCurrency(item.price * quantity)}</div>
            <button onClick={()=> removeFromCart(item.id)} class="cart-remove-button">X</button>
        </div>
    )

}