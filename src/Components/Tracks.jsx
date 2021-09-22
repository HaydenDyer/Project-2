import React, {useState, useEffect} from 'react';

function Tracks(props) {

    const url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${process.env.REACT_APP_LASTFM_KEY}&format=json`
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setData(res.tracks.track)
            })
            .catch(console.error)
    }, [])

    function addCommas(x) {
        let n = parseInt(x)
        let str = n.toLocaleString("en-US")
        return str
    }

    return (
        <section>
            {data.map(item => {
                return (
                    <div className='item' key={item.name}>
                        <a href={item.url} className='lastFmLink'><h2 className='name'>"{item.name}" by {item.artist.name}</h2></a>
                        <h4 className='count'>► Times Played: {addCommas(item.playcount)}</h4>
                    </div>
                )
            })}
        </section>
    )
}

export default Tracks;