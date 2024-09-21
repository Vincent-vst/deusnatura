import { Link } from "react-router-dom";

const ModulesNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/eartraining">Ear training</Link>
        </li>
        <li>
          <Link to="/repeat">Repeat</Link>
        </li>
        <li>
          <Link to="/sightreading">Sight reading</Link>
        </li>
        <li>
          <Link to="/theory">Theory</Link>
        </li>
        <li>
          <Link to="/improvisation">Improvisation</Link>
        </li>
      </ul>
    </nav>
  );
};

export default ModulesNav;
