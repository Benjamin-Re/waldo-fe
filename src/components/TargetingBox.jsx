export function TargetingBox ({ pos, setShowTargetingBox }) {
    
    return (
        <div style={{ position: 'absolute', left: `${pos.left}px`, top: `${pos.top}px`}}>
            <select onChange={() => { setShowTargetingBox(false)}}>
                <option>White Wizzard</option>
                <option>Waldo</option>
                <option>Welda</option>
            </select>
        </div>
    )
}
