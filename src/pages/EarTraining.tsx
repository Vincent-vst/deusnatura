import { Howl, Howler } from "howler";

const EarTraining = () => {
  const sound = new Howl({
    src: ["/src/assets/audio/notes/A3.wav"],
    html5: true,
  });
  const sound2 = new Howl({
    src: ["/src/assets/audio/notes/B3.wav"],
    html5: true,
  });
  sound.play();
  sound2.play();
  return (
    <div>
      <h1>Ear training</h1>
      {/* TODO : try to play notes first
      Then play interval
      then say which interval it is 
      https://jsfiddle.net/2syojed6/2/
      */}
    </div>
  );
};

export default EarTraining;
