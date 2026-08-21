export function TargetingBox ({ pos, setShowTargetingBox, ratio }) {
    
    async function verifySelection(selection) {
        const res = await fetch('http://localhost:3000/', {
            method: 'GET',
            headers: {
                coordinates: JSON.stringify({ "x": ratio.x, "y": ratio.y }),
                selection
            }
        })
        const data = await res.json()
        console.log(data.status)
    }

    return (
        <div style={{ position: 'absolute', left: `${pos.left}px`, top: `${pos.top}px`}}>
            <select defaultValue="" onChange={(e) => {
                setShowTargetingBox(false)
                verifySelection(e.target.value)
                }}>
                <option value="" disabled>Select a character</option>
                <option>White Wizzard</option>
                <option>Waldo</option>
                <option>Welda</option>
            </select>
        </div>
    )
}
