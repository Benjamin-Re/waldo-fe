import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <div>
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
          <tr>
            <td>Feria</td>
            <td>12</td>
            <td>Name</td>
          </tr>
          <tr>
            <td>Carpet</td>
            <td>12</td>
            <td>Name</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
