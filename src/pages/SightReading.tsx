import { randomScoreURL } from "./core/SightReadingCore";

export default function SightReading() {
  //TODO : there has to be a more reacty way to do this
  function createTag() {
    if (document.getElementById("iframeScore")) {
      const elem = document.getElementById("iframeScore");
      elem?.parentNode?.removeChild(elem);
    }
    const nextFrame = document.createElement("iframe");
    nextFrame.setAttribute("src", randomScoreURL());
    nextFrame.setAttribute("id", "iframeScore");
    document.getElementById("frame")?.appendChild(nextFrame);
  }

  return (
    <>
      <h1>Sight reading</h1>
      <button type="button" onClick={() => createTag()}>
        test
      </button>
      <div id="frame">
        <iframe src={randomScoreURL()} id="iframeScore"></iframe>
      </div>
    </>
  );
}
