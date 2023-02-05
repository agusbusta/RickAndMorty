import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Favorites.module.css';
import { Link } from 'react-router-dom';
import { filterCards, orderCards, getFavorites, cleanFavorites } from '../../redux/actions';


const Favorites = () => {
    
    const dispatch = useDispatch();
   const { myFavorites } = useSelector(state => state);

   const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
   }

   const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))
}

    useEffect(() => {
        dispatch(cleanFavorites())
        dispatch(getFavorites())
        // eslint-disable-next-line 
    }, [])



    return (
        <div>
            <div className={style.selectorCont}>
            <select className={style.selector} name="order" onChange={handleOrder}>
                <option selected="true" disabled="disabled">Order By</option>
                <option value="All">All</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select className={style.selector} name="filter" onChange={handleFilter}>
                <option selected="true" disabled="disabled">Filter By</option>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="Unknown">Unknown</option>
            </select>
            </div>
            { myFavorites.map(character => {
                return(
                    <div className={style.cardDiv} key={character.id}>
                            <div className={style.divConta}>
                        
                            <Link to={`/detail/${character.id}`}>
                            <h2 className={style.nameCss}>{character.name}</h2>
                            </Link>
                        <div className={style.imgDiv}>
                            <img className={style.cssimg}s src={character.image} alt={character.name} />
                        </div >
                        <div className={style.speGen}>
                            <h2>{character.species}</h2>
                            <h2>{character.gender}</h2>
                        </div>
                            </div>
                         
                        </div>
)
})
}
        </div>
)
}

export default Favorites;
