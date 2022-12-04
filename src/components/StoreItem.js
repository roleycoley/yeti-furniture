import useShoppingCart from "../context/ShoppingCartContext"


export default function CartItem({id, imgUrl, name, price})
{
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        } = useShoppingCart()
        const quantity = getItemQuantity(id)

    return (
        <div class='furniture-item'>
            <div style={{height:'252px', overflow:'hidden', textAlign:'center'}}>
                <img src={imgUrl} alt={name}/>
            </div>
            <div class='item-info'>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div class='label'>{name}</div>
                    <div class='label' style={{color:'gray', fontSize:'20px'}}>{price}</div>
                </div>
                {quantity === 0 ? 
                (
                    <button 
                    class='yeti-style' 
                    style={{height:'40px', width:'90%', fontSize:'12px'}}
                    onClick={() => increaseCartQuantity(id)}
                    >
                        + Add To Cart
                    </button>
                ) : 
                (
                    <div style={{display:'flex', justifyContent:'center', marginTop:'10px'}}>
                        <div class='items-in-cart-buttons'>

                            <button 
                            class='yeti-style' 
                            style={{width:'30px', height:'30px'}} 
                            onClick={() => decreaseCartQuantity(id)}
                            >
                                -
                            </button>

                            <div>{quantity} in cart</div>

                            <button class='yeti-style' 
                            style={{width:'30px', height:'30px'}}
                            onClick={() => increaseCartQuantity(id)}
                            >
                                +
                            </button>

                            <button 
                            class='yeti-style' 
                            style={{height:'40px', width:'80px'}}
                            onClick={() => removeFromCart(id)}
                            >
                                Remove
                            </button>

                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}