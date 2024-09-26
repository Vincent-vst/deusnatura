// @ts-ignore
import "/src/assets/style/repeat.css";
import RepeatCore from "../core/RepeatCore";
import { useState } from 'react';

export default function Repeat() {

  const [level, setLevel] = useState(1);

  return (
    <>
      <div id="repeat">
        <h1>Repeat</h1>
        <a href={void(0)} onClick={()=>setLevel(1)}>level 1</a>
        <a href={void(0)} onClick={()=>setLevel(2)}>level 2</a>
        <RepeatCore level={level} />
      </div>
    </>
  );
}
