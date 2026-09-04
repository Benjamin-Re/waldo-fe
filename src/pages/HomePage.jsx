import styles from "./HomePage.module.css";
import { useContext, useEffect, useState } from "react";
import { GameContext } from "../components/ContextProvider"

export function HomePage() {
  const [highscores, setHighscores] = useState([])

  const { username, setUsername } = useContext(GameContext) 

  useEffect(() => {
    fetchHighscores()
  }, [])

  async function fetchHighscores () {
    const res = await fetch('http://localhost:3000/highscores')
    const data = await res.json()
    console.log(data)
    setHighscores(data)
  }

  function handleClick() {
    console.log(username);
  }

  function handleChange(e) {
    setUsername(e.target.value)
  }

  return (
    <div>
      <div>
        <label htmlFor="username">Username: </label>
        <input
          onChange={handleChange}
          value={username}
          id="username"
          name="username"
          type="text"
        />
        <button onClick={handleClick}>OK</button>
      </div>
      <h1>Highscores</h1>
      <table className={styles.scoreTable}>
        <thead>
          <tr>
            <th>Game</th>
            <th>Score</th>
            <th>Name</th>
          </tr>
        </thead>

        <tbody>
          { highscores.map(highscore => {
            return (
              <tr>
                <td>{highscore.game}</td>
                <td>{highscore.time}</td>
                <td>{highscore.user}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
