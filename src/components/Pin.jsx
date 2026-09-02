import pinImg from '../pin.png'
export function Pin({x, y}) {
    return (
        <img src={pinImg} style={{ position: 'absolute', left: `${x-20}px`, top: `${y-20}px`, width: '50px'}}></img>
    )
}