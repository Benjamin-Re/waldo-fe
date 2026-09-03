export function TargetingBox({
  pos,
  setShowTargetingBox,
  ratio,
  setPins,
  characters,
  setCharacters,
  setIsRunning,
  setSeconds,
}) {
  async function verifySelection(selection) {
    const res = await fetch("http://localhost:3000/", {
      method: "GET",
      headers: {
        coordinates: JSON.stringify({ x: ratio.x, y: ratio.y }),
        selection,
      },
    });
    const data = await res.json();
    console.log(data.status);
    if (data.status) {
      const newPin = {
        id: Date.now() + Math.random(),
        x: pos.left,
        y: pos.top,
      };
      setPins((prev) => {
        return [...prev, newPin];
      });
      const remainingCharacters = characters.filter((character) => {
        return character != selection;
      });
      setCharacters(remainingCharacters);
      setIsRunning(remainingCharacters.length > 0);
      if (remainingCharacters.length === 0) {
        endTimer();
      }
    }
  }

  async function endTimer() {
    const res = await fetch("http://localhost:3000/end", { method: "GET" });
    const data = await res.json();
    console.log(`Your time: ${data.time}`);
    setSeconds(data.time);
  }

  return (
    <div
      style={{
        position: "absolute",
        left: `${pos.left}px`,
        top: `${pos.top}px`,
      }}
    >
      <select
        defaultValue=""
        onChange={(e) => {
          setShowTargetingBox(false);
          verifySelection(e.target.value);
        }}
      >
        <option value="" disabled>
          Select a character
        </option>
        {characters.map((character) => {
          return (
            <option key={character} value={character}>
              {character}
            </option>
          );
        })}
      </select>
    </div>
  );
}
