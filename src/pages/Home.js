import bed from '../images/bed.jpg'
import chair from '../images/chair.jpg'
import couch from '../images/couch.jpg'
import livingRoom from '../images/living-room.jpg'
import InteractiveChar from '../components/InteractiveChar'
import FurnitureImage from '../components/FurnitureImage'
import Navbar from '../components/Navbar'

import { Link } from "react-router-dom"

export default function Home(){
    return (
        <>
            <Navbar />

            <div class="fimage-container">
                <div class="letter-container">
                    <InteractiveChar character='Y' placement={1}/>
                    <InteractiveChar character='E' placement={2}/>
                    <InteractiveChar character='T' placement={3}/>
                    <InteractiveChar character='I' placement={4}/>
                    <div style={{margin: '0px 2px'}}></div>
                    <InteractiveChar character='F' placement={5} />
                    <InteractiveChar character='U' placement={6}/>
                    <InteractiveChar character='R' placement={7}/>
                    <InteractiveChar character='N' placement={8}/>
                    <InteractiveChar character='I' placement={9}/>
                    <InteractiveChar character='T' placement={10}/>
                    <InteractiveChar character='U' placement={11}/>
                    <InteractiveChar character='R' placement={12}/>
                    <InteractiveChar character='E' placement={13}/>
                </div>

                <Link to="/store">
                    <div class="button">browse</div>
                </Link>
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