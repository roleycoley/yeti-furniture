import { Link } from "react-router-dom"

export default function Navbar() {

    return (
        <>
            <p class="header">Deals up to 75% off!</p>
            <div class="sections">
                <Link to="/"><button>Home</button></Link>
                <Link to ="/contact"><button>Contact</button></Link>
                <div class="dropdown" data-dropdown>
                    <button class="link" data-dropdown-button>Products</button>
                    <div class="dropdown-menu information-grid">
                        <div>
                            <div class="dropdown-heading">Seating</div>
                            <div class="dropdown-links">
                                <Link to ="/store"><div class="link">Chairs</div></Link>
                                <Link to ="/store"><div class="link">Sofas</div></Link>
                                <Link to ="/store"><div class="link">Stools</div></Link>
                            </div>
                        </div>
                        <div>
                            <div class="dropdown-heading">Appliances</div>
                            <div class="dropdown-links">
                                <Link to ="/store"><div class="link">Refrigerators</div></Link>
                                <Link to ="/store"><div class="link">Ovens</div></Link>
                                <Link to ="/store"><div class="link">Washing Mashines</div></Link>
                            </div>
                        </div>
                        <div>
                            <div class="dropdown-heading">Tables</div>
                            <div class="dropdown-links">
                                <Link to ="/store"><div class="link">Desks</div></Link>
                                <Link to ="/store"><div class="link">Dining Tables</div></Link>
                            </div>
                        </div>
                        <div>
                            <div class="dropdown-heading">Chairs</div>
                            <div class="dropdown-links">
                                <Link to ="/store"><div class="link">All</div></Link>
                                <Link to ="/store"><div class="link">Latest</div></Link>
                                <Link to ="/store"><div class="link">Popular</div></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <button>Locations</button>
            </div>
        </>
    )
}