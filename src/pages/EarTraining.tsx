import { playRandomInterval, intervalNames } from "../core/IntervalPlayer";

export default function EarTraining() {
  return (
    <div>
      <h1>Ear training</h1>
      <button type="button" onClick={() => playRandomInterval()}>
        play
      </button>
      <ul>
        {intervalNames.map((interval) => (
          <li key={interval}><a href={void(0)} onClick={()=> console.log(interval)}>{interval}</a></li>
        ))}
      </ul>
    </div>
  );
}
