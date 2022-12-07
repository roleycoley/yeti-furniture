import InteractiveChar from '../components/InteractiveChar'
import FurnitureImage from '../components/FurnitureImage'
import { Link } from "react-router-dom"



export default function Home(){
    return (
        <>
            <div class="fimage-container">
                <img class="fpage-image" src="images/living-room.jpg" alt="living room"/>
                <div class="letter-container">
                    <InteractiveChar character='Y' placement={1}/>
                    <InteractiveChar character='E' placement={2}/>
                    <InteractiveChar character='T' placement={3}/>
                    <InteractiveChar character='I' placement={4}/>
                    <div style={{margin:'0 2px'}}></div>
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
            </div>

            
            <div class="grid-container">
                <FurnitureImage imgUrl="images/couch.jpg" text='couches'/>
                <FurnitureImage imgUrl="images/bed.jpg" text='beds'/>
                <FurnitureImage imgUrl="images/chair.jpg" text='chairs'/>
            </div>

        </>
    )
    
}