export function StartButton({ isRunning, setIsRunning }) {
  function handleClick() {
    console.log("Clicked Start");
    setIsRunning(true);
    fetch("https://waldo-be.vercel.app/start", {
        method: "GET"
    })
  }
  return <button onClick={handleClick}>Start</button>;
}
