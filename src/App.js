import './styles.css'
import bed from './images/bed.jpg'
import chair from './images/chair.jpg'
import couch from './images/couch.jpg'
import livingRoom from './images/living-room.jpg'
import InteractiveChar from './components/InteractiveChar'
import FurnitureImage from './components/FurnitureImage'

    //https://www.freepik.com/free-photos-vectors/interior-background
        

    // dropdown menu
    document.addEventListener("click", e => {
        const isDropdownButton = e.target.matches("[data-dropdown-button]");

        if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

        let currentDropdown;

        if(isDropdownButton)
        {
            currentDropdown = e.target.closest('[data-dropdown]');
            currentDropdown.classList.toggle('active');
        }

        const isDropdownButtonMenu = e.target.matches("[data-dropdown-menu]");

        if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

        document.querySelectorAll("[data-dropdown].active").forEach(dropDown => {
            if (dropDown === currentDropdown) return;
            dropDown.classList.remove("active");
        });
    })

function App() {
  return (
    <>
    <p class="header">Deals up to 75% off!</p>

<div class="sections">
    
    <button>Home</button>
    <button>Contact</button>
    <div class="dropdown" data-dropdown>
        <button class="link" data-dropdown-button>Products</button>
        <div class="dropdown-menu information-grid">
            <div>
                <div class="dropdown-heading">Seating</div>
                <div class="dropdown-links">
                    <a href="#" class="link">Chairs</a>
                    <a href="#" class="link">Sofas</a>
                    <a href="#" class="link">Stools</a>
                </div>
            </div>
            <div>
                <div class="dropdown-heading">Appliances</div>
                <div class="dropdown-links">
                    <a href="#" class="link">Refrigerators</a>
                    <a href="#" class="link">Ovens</a>
                    <a href="#" class="link">Washing Mashines</a>
                </div>
            </div>
            <div>
                <div class="dropdown-heading">Tables</div>
                <div class="dropdown-links">
                    <a href="#" class="link">Desks</a>
                    <a href="#" class="link">Dining Tables</a>
                </div>
            </div>
            <div>
                <div class="dropdown-heading">Chairs</div>
                <div class="dropdown-links">
                    <a href="#" class="link">All</a>
                    <a href="#" class="link">Latest</a>
                    <a href="#" class="link">Popular</a>
                </div>
            </div>
        </div>
    </div>
    <button>Locations</button>
</div>

<div class="fimage-container">
    <div class="letter-container">
        <InteractiveChar character='Y' placement={1}/>
        <InteractiveChar character='E' placement={2}/>
        <InteractiveChar character='T' placement={3}/>
        <InteractiveChar character='I' placement={4}/>
        <div style={{margin: '0px 2px'}}></div>
        <InteractiveChar character='F' placement={5}/>
        <InteractiveChar character='U' placement={6}/>
        <InteractiveChar character='R' placement={7}/>
        <InteractiveChar character='N' placement={8}/>
        <InteractiveChar character='I' placement={9}/>
        <InteractiveChar character='T' placement={10}/>
        <InteractiveChar character='U' placement={11}/>
        <InteractiveChar character='R' placement={12}/>
        <InteractiveChar character='E' placement={13}/>
    </div>
    <div class="button">browse</div>
    <img class="fpage-image" src={livingRoom} alt="living room"/>
</div>

<div class="grid-container">
    <FurnitureImage image={couch} text='couches'/>
    <FurnitureImage image={bed} text='beds'/>
    <FurnitureImage image={chair} text='chairs'/>
</div>
    </>
  )
}

export default App;
