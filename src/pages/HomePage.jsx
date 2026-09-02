import { useState } from 'react'
import { TargetingBox } from '../components/TargetingBox'
import waldoImg from '../waldo.webp'
import { Pin } from '../components/Pin'

export function HomePage() {

  const [pos, setPos] = useState({left: '100', top: '300'})
  const [showTargetingBox, setShowTargetingBox] = useState(false)
  const [ratio, setRatio] = useState({x: 0, y:0})
  const [pins, setPins] = useState([])
  const [characters, setCharacters] = useState(['Waldo', 'Welda', 'White Whizzard'])

  console.log("Pins:", pins);
  function handleClick (e) {
    setPos({left: e.pageX, top: e.pageY})
    setShowTargetingBox(true)
    // convert pixel coordinates to a ratio
    const ratioX = e.pageX / e.currentTarget.offsetWidth
    const ratioY = e.pageY / e.currentTarget.offsetHeight
    setRatio({x: ratioX, y: ratioY})
    console.log(`pixel pos: ${e.pageX}, ${e.pageY}. Ratio: x:${ratioX}, y:${ratioY}`)
  } 

  return (
    <div>
      <img src={waldoImg} style={{ display: 'block', width: '100%'}} onClick={handleClick}></img>
      { showTargetingBox && <TargetingBox pos={pos} ratio={ratio} setShowTargetingBox={setShowTargetingBox} setPins={setPins} characters={characters} setCharacters={setCharacters}></TargetingBox> }
      {pins.map((pin) => {
        return <Pin key={pin.id} x={pin.x} y={pin.y} />
      })}
    </div>
  );
}
