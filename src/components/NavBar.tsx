import { Link } from "react-router-dom";

function NavBar() {
    return <>
        <ul>
            <li><Link to="/stats"> Stats </Link></li>
            <li><Link to="/"> Home </Link></li>
            <li><Link to="/contact"> Contact </Link></li>
        </ul>
    </>;
}

export default NavBar; 