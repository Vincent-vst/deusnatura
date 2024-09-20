import { randomScoreURL, createTag } from "../core/SightReadingCore";

export default function SightReading() {
  

  return (
    <>
      <h1>Sight reading</h1>
      <button type="button" onClick={() => createTag()}>
        test
      </button>
      <div id="frame">
        <iframe src={randomScoreURL()} id="iframeScore" height="700px" width="100%"></iframe>
      </div>
    </>
  );
}