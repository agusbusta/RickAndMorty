import SearchBar from "./SearchBar/SearchBar";
import { Link } from "react-router-dom";


const Nav = ({ onSearch }) => {

    return(
        <nav>
            <Link to="home" className="homebtn" ><i class="fa-sharp fa-solid fa-house"> Home </i></Link>
            <Link to="/favorites" className="homebtn"><i class="fa-sharp fa-solid fa-heart"> Favorites </i></Link>
            <Link to="/about" className="homebtn"><i class="fa-sharp fa-solid fa-question"> About </i></Link>
            <Link to="/" className="logoutBtn"><i class="fa-sharp fa-solid fa-right-from-bracket"></i></Link>
            <SearchBar onSearch={onSearch} 
            />
        </nav>
    )
}

export default Nav;