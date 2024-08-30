import { Link } from "react-router-dom";

function Modules() {

    const modules = ['theory', 'sightreading', 'improvisation'];
    return <>
        <div>
            {modules.map(modules => <Link to={modules} key={modules} >{modules} <br /></Link>)}
        </div>
    </>;
}

export default Modules; 