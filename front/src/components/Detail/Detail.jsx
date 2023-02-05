import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import style from './Detail.module.css';

const Detail = () => {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) { 
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId])

    return(
      <>
            <button className={style.backBtn}>
                <Link to='/home' ><i class="fa-solid fa-arrow-left"></i></Link>
            </button>
        <div className={style.detailCardContainer}>
          <div className={style.imgContainer}>
            <img className={style.detailImg} src={character?.image} alt={character.name} />
          </div>
            <div className={style.textDetailContainer}>
            <h1 className={style.textDetail}>{character?.name}</h1>
            <p className={style.textDetail}>Status: {character?.status}</p>
            <p className={style.textDetail}>Species: {character?.species}</p>
            <p className={style.textDetail}>Gender: {character?.gender}</p>
            <p className={style.textDetail}>Origin: {character?.origin?.name}</p>
            </div>
        </div>
        </>
    )
}

export default Detail;