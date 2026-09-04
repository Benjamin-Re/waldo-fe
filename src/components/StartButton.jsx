import styles from './StartButton.module.css'

export function StartButton({ isRunning, setIsRunning }) {
  function handleClick() {
    console.log("Clicked Start");
    setIsRunning(true);
    fetch("http://localhost:3000/start", {
        method: "GET"
    })
  }
  return <button className={styles.btn} onClick={handleClick}>Start</button>;
}
