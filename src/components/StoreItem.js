export default function CartItem({item, name, price})
{
    let quantity = 1;

    return (
        <div class='furniture-item'>
            <div style={{height:'252px', overflow:'hidden', textAlign:'center'}}>
                <img src={item} alt={item}/>
            </div>
            <div class='item-info'>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div class='label'>{name}</div>
                    <div class='label' style={{color:'gray', fontSize:'20px'}}>{price}</div>
                </div>
                {quantity === 0 ? 
                (
                    <button class='yeti-style' style={{height:'40px', width:'90%', fontSize:'12px'}}>
                        + Add To Cart
                    </button>
                ) : 
                (
                    <div style={{display:'flex', justifyContent:'center', marginTop:'10px'}}>
                        <div class='items-in-cart-buttons'>
                            <button class='yeti-style' style={{width:'30px', height:'30px'}} >-</button>
                            <div>{quantity} in cart</div>
                            <button class='yeti-style' style={{width:'30px', height:'30px'}}>+</button>
                            <button class='yeti-style' style={{height:'40px', width:'80px'}}>Remove</button>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}