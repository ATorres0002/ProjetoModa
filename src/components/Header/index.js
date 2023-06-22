import {Link} from 'react-router-dom';
import './style.css';

function Header(){
    return(
        <header>
            <h2>Designing Trends Co.</h2>
        <div>
            <Link to='/'>Home</Link>
            <br/>
            <Link to='/sobre'>Sobre Nós</Link>
            <br/>
            <Link to='/novidades'>Novidades</Link>
            <br/>
            <Link to='/noticias'>Noticias</Link>
        </div>
        </header>
    )
}
export default Header;