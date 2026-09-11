import { useState, useEffect } from "react";
import { TargetingBox } from "../components/TargetingBox";
import { Pin } from "../components/Pin";
import { StartButton } from "../components/StartButton";
import { games } from '../games'

export function GamePage({ game }) {
  
  const config = games[game]
  const [pos, setPos] = useState({ left: "100", top: "300" });
  const [showTargetingBox, setShowTargetingBox] = useState(false);
  const [ratio, setRatio] = useState({ x: 0, y: 0 });
  const [pins, setPins] = useState([]);
  const [characters, setCharacters] = useState(config.characters);
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  function handleClick(e) {
    const image = e.currentTarget.getBoundingClientRect();
    setPos({ left: e.pageX, top: e.pageY }); // 
    setShowTargetingBox(true);
    // convert pixel coordinates to a ratio
    const ratioX = (e.clientX - image.left) / image.width; // where you clicked on the screen - where the image starts / by the images width
    const ratioY = (e.clientY - image.top) / image.height;
    setRatio({ x: ratioX, y: ratioY });
    console.log(
      `pixel pos: ${e.pageX}, ${e.pageY}. Ratio: x:${ratioX}, y:${ratioY}`,
    );
  }

  useEffect(() => {
    if (!isRunning) return;
    const intervalId = setInterval(() => {
      setSeconds((prev) => {
        return prev + 1;
      });
    }, 1000);
    // cleanup
    return () => {
      return clearInterval(intervalId);
    };
  }, [isRunning]);

  return (
    <div key={config.name}>
      {!isRunning ? (
        <>
          {seconds > 0 && <div>Your time: {seconds}</div>}
          <StartButton isRunning={isRunning} setIsRunning={setIsRunning} />
        </>
      ) : (
        <div>
          <div>Your time: {seconds}</div>
          <img
            src={config.image}
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
              game={config.name}
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
