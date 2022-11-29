import './styles.css'
import { Routes, Route } from 'react-router-dom'
import Home  from './pages/Home'
import Contact  from './pages/Contact'
import Store from './pages/Store'

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

    document.querySelectorAll("[data-dropdown].active").forEach(dropDown => {
        if (dropDown === currentDropdown) return;
        dropDown.classList.remove("active");
    });
})

function App() {
  return (
    <>  
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/store' element={<Store />} />
        </Routes>
    </>
  )
}

export default App;
