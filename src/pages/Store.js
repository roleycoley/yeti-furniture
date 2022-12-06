import StoreItem from '../components/StoreItem'
import storeItems from "../data/items.json"


export default function Store(){
    return (
        <div class="furniture-item-container">
            {storeItems.map(item => (
            <StoreItem key={item.id} {...item} />
            )
          )}
        </div>
    )
}