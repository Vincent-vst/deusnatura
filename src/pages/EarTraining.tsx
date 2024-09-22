import {
  playRandomInterval,
  intervalNames,
  styleDive,
} from "../core/IntervalPlayer";
import '/src/assets/style/interval.css';
import repeat from '/src/assets/icons/repeat.png'

export default function EarTraining() {
  return (
    <>
      <div>
        <div id="ear-training">
          <h1>Ear training</h1>
          <a href={void(0)} onClick={()=> playRandomInterval()}>
            <img src={repeat} alt="repeat icon" />
          </a>
          <ul>
            {intervalNames.map((interval) => (
              <li key={interval} id={interval}>
                <a href={void 0} onClick={() => styleDive(interval)}>
                  {interval}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
