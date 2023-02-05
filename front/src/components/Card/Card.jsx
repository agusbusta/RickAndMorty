import { Link } from "react-router-dom";
import style from './Card.module.css';
import { addFavorite, deleteFavorite } from '../../redux/actions';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Card({ name, gender, onClose, species, image, id }) {
   const dispatch = useDispatch();
   const { myFavorites } = useSelector(state => state);
   const [ isFav, setIsFav ] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         dispatch(deleteFavorite(id));
        // setIsFav(false);
      }
      else{
         dispatch(addFavorite({ name, gender, onClose, species, image, id }));
         setIsFav(true);
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
       //eslint-disable-next-line
   }, [myFavorites]);


    
   return (
      <div className={style.divConta}>
      <div className={style.cardDiv}>
      <div className={style.buttonDiv}>
         <button className={style.buttonx} onClick={onClose}><i class="fa-solid fa-xmark"></i></button>
      </div>
         <Link to={`/detail/${id}`}>
            <h2 className={style.nameCss}>{name}</h2>
         </Link>
      <div className={style.imgDiv}>
         <img className={style.cssimg}s src={image} alt={name} />
      </div >
      {
      <button className={style.favBtn} onClick={handleFavorite}>
         {isFav ? '❤️':'🤍'  }
      </button>
}
      <div className={style.speGen}>
         <h2>{species}</h2>
         <h2>{gender}</h2>
      </div>
      
      </div>
      </div>
   );
}


 
export default Card;
