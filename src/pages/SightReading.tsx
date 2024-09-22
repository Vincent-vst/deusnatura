import { randomScoreURL, createTag } from "../core/SightReadingCore";
import "/src/assets/style/sightreading.css";
import random from "/src/assets/icons/random.png";

export default function SightReading() {
  return (
    <>
      <div id="sight-reading">
        <h1>Sight reading</h1>
        {/* <button type="button" onClick={() => createTag()}>
          test
        </button> */}
        <a href={void(0)} onClick={()=>createTag()}>
          <img src={random} alt="random score" />
        </a>
        <div id="frame">
          <iframe
            src={randomScoreURL()}
            id="iframeScore"
          ></iframe>
        </div>
      </div>
    </>
  );
}
