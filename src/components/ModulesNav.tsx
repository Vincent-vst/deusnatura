import Card from "./Card";

const ModulesNav = () => {
  return (
    <nav>
      <div className="main-card">
        <Card
          path="/eartraining"
          imagePath="/assets/icons/ear.png"
          name="Ear training"
          description="Recognize any intervals"
        />
      </div>
      <div className="card">
        <Card
          path="/repeat"
          imagePath="/assets/icons/repeat.png"
          name="Repeat"
          description="Instantly play back a melody"
        />
      </div>
      <div className="card">
        <Card
          path="/sightreading"
          imagePath="/assets/icons/sightreading.png"
          name="Sight Reading"
          description="Sight read any score"
        />
      </div>
      <div className="card">
        <Card
          path="/theory"
          imagePath="/assets/icons/theory.png"
          name="Theory"
          description="Music theory questions"
        />
      </div>
      <div className="card">
        <Card
          path="/improvisation"
          imagePath="/assets/icons/improvisation.png"
          name="Improvisation"
          description="Improvise over a backing track"
        />
      </div>
    </nav>
  );
};

export default ModulesNav;
