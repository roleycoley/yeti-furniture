import { Link } from "react-router-dom"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useShoppingCart } from "../context/ShoppingCartContext"
import { useRef } from 'react'

export default function Navbar() {

    const { openCart, cartQuantity } = useShoppingCart()
    const dropdownRef = useRef()
    console.log(cartQuantity)

    return (
        <>
            <p className="header">Deals up to 50% off!</p>
            <div className="sections">
                <Link to="/"><button>Home</button></Link>
                <Link to ="/contact"><button>Contact</button></Link>
                <div ref={dropdownRef} className="dropdown" data-dropdown>
                    <button className="link" data-dropdown-button>Products</button>
                    <div className="dropdown-menu information-grid">
                        <div>
                            <div className="dropdown-heading">Seating</div>
                            <div className="dropdown-links">
                                <Link to ="/store" onClick={() => dropdownRef.classList.remove('active')}><div className="link" >Chairs</div></Link>
                                <Link to ="/store" onClick={() => dropdownRef.classList.remove('active')}><div className="link">Sofas</div></Link>
                                <Link to ="/store" onClick={() => dropdownRef.classList.remove('active')}><div className="link">Stools</div></Link>
                            </div>
                        </div>
                        <div>
                            <div className="dropdown-heading">Appliances</div>
                            <div className="dropdown-links">
                                <Link to ="/store" onClick={() => dropdownRef.classList.remove('active')}><div className="link">Refrigerators</div></Link>
                                <Link to ="/store" onClick={() => dropdownRef.classList.remove('active')}><div className="link">Ovens</div></Link>
                                <Link to ="/store" onClick={() => dropdownRef.classList.remove('active')}><div className="link">Washing Mashines</div></Link>
                            </div>
                        </div>
                        <div>
                            <div className="dropdown-heading">Tables</div>
                            <div className="dropdown-links">
                                <Link to ="/store" onClick={() => dropdownRef.classList.remove('active')}><div className="link">Desks</div></Link>
                                <Link to ="/store" onClick={() => dropdownRef.classList.remove('active')}><div className="link">Dining Tables</div></Link>
                            </div>
                        </div>
                        <div>
                            <div className="dropdown-heading">Chairs</div>
                            <div className="dropdown-links">
                                <Link to ="/store" onClick={() => dropdownRef.classList.remove('active')}><div className="link">All</div></Link>
                                <Link to ="/store" onClick={() => dropdownRef.classList.remove('active')}><div className="link">Latest</div></Link>
                                <Link to ="/store" onClick={() => dropdownRef.classList.remove('active')}><div className="link">Popular</div></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to ="/contact"><button>Locations</button></Link>
                <div className='cart-icon' onClick={openCart}>
                    <ShoppingCartIcon/>
                    {cartQuantity > 0 && (
                        <div className='cart-items-amount'>
                            {cartQuantity}
                        </div>
                    )}          
                </div>

            </div>
        </>
    )
}