import { useState, useEffect } from "react";
import { TargetingBox } from "../components/TargetingBox";
// import waldoImg from '../waldo.webp'
import kanguritoImg from "../kangurito.jpg";
import { Pin } from "../components/Pin";
import { StartButton } from "../components/StartButton";

export function HomePage() {
  const [pos, setPos] = useState({ left: "100", top: "300" });
  const [showTargetingBox, setShowTargetingBox] = useState(false);
  const [ratio, setRatio] = useState({ x: 0, y: 0 });
  const [pins, setPins] = useState([]);
  const [characters, setCharacters] = useState([
    "kangurito",
    "red shirt",
    "super mario",
    "cotton candy",
  ]);
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0)

  function handleClick(e) {
    setPos({ left: e.pageX, top: e.pageY });
    setShowTargetingBox(true);
    // convert pixel coordinates to a ratio
    const ratioX = e.pageX / e.currentTarget.offsetWidth;
    const ratioY = e.pageY / e.currentTarget.offsetHeight;
    setRatio({ x: ratioX, y: ratioY });
    console.log(
      `pixel pos: ${e.pageX}, ${e.pageY}. Ratio: x:${ratioX}, y:${ratioY}`,
    );
  }

  useEffect(() => {
    if(!isRunning) return
    const intervalId = setInterval(() => {
      setSeconds((prev)=> {
        return prev + 1
      })
    }, 1000)
    // cleanup
    return () => {
      return clearInterval(intervalId)
    }
  }, [isRunning])

  return (
    <div>
      {!isRunning ? (
        <>
          { (seconds > 0) && <div>Your time: {seconds}</div> }
          <StartButton isRunning={isRunning} setIsRunning={setIsRunning} />
        </>

      ) : (
        <div>
          <div>Your time: {seconds}</div>
          <img
            src={kanguritoImg}
            style={{ display: "block", width: "100%" }}
            onClick={handleClick}
          ></img>
          {showTargetingBox && (
            <TargetingBox
              pos={pos}
              ratio={ratio}
              setIsRunning={setIsRunning}
              setShowTargetingBox={setShowTargetingBox}
              setPins={setPins}
              characters={characters}
              setCharacters={setCharacters}
              setSeconds={setSeconds}
            ></TargetingBox>
          )}
          {pins.map((pin) => {
            return <Pin key={pin.id} x={pin.x} y={pin.y} />;
          })}
        </div>
      )}
    </div>
  );
}
