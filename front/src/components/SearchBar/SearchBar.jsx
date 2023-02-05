import { useState } from "react";
import style from './SearchBar.module.css'

function SearchBar({ onSearch }) {
   const [character, setCharacter] = useState('')


   const handleChange = (event) => {
      setCharacter(event.target.value)
   }

   return (
      <div className={style.searcherContainer}>
      <h1  className={style.tituloApp}><img alt='logo'className={style.logopic} src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png"></img></h1>
         <input className={style.searcher} type='search' value={character} onChange={handleChange} />
         <button className={style.btnSearcher} onClick={() => onSearch(character)}>ADD</button>
      </div>
   );
}

export default SearchBar;
