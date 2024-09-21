import { Link } from "react-router-dom";

const ModulesNav = () => {
  return (
    <nav>
      <ul>
        <li className="card">
          <Link to="/eartraining">Ear training</Link>
        </li>
        <li className="card">
          <Link to="/repeat">Repeat</Link>
        </li>
        <li className="card">
          <Link to="/sightreading">Sight reading</Link>
        </li>
        <li className="card">
          <Link to="/theory">Theory</Link>
        </li>
        <li className="card">
          <Link to="/improvisation">Improvisation</Link>
        </li>
      </ul>
    </nav>
  );
};

export default ModulesNav;
