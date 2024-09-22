import { Link } from "react-router-dom";

interface Module {
  path: string;
  imagePath: string;
  name: string;
  description: string;
}

export default function Card(module: Module) {
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
