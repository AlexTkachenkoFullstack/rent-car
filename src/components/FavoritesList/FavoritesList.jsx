import FavoriteItem from "../FavoriteItem/FavoriteItem"
import { FavoriteCarsList } from "./FavoritesList.styled"

const FavoritesList=({favoriteCars})=>{
    return(

            <FavoriteCarsList>
                {favoriteCars.map(item=><FavoriteItem key={item.id} car={item}></FavoriteItem>)}
            </FavoriteCarsList>
       )
}

export default FavoritesList