import { Link } from "react-router-dom";

export default function Card(module){
    return (
        <>
          <Link to={module.path}>
            <img src={module.imagePath} alt={module.name} />
            <h3>{module.name}</h3>
            <p>{module.description}</p>
          </Link>
        </>
    );
}