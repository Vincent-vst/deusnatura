import ModulesNav from "../components/ModulesNav";
import TopBar from "../components/TopBar";
import "/src/assets/style/home.css";

const Home = () => {
  return (
    <>
      <div id="home">
        <TopBar />
        <h1>Welcome back !</h1>
        <ModulesNav />
      </div>
    </>
  );
};

export default Home;
