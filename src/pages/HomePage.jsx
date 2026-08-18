import { useEffect, useState } from 'react'
import { TargetingBox } from '../components/TargetingBox'

export function HomePage() {

  const [pos, setPos] = useState({left: '100', top: '300'})
  const [showTargetingBox, setShowTargetingBox] = useState(false)
  
  useEffect(() => {
    const handleClick = (e) => {
      console.log("Clicked at:", e.clientX, e.clientY);
      setPos({left: e.clientX, top: e.clientY})
      setShowTargetingBox(true)
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div >
      <h1>Home</h1>
      { showTargetingBox && <TargetingBox pos={pos} setShowTargetingBox={setShowTargetingBox}></TargetingBox> }
    </div>
  );
}
