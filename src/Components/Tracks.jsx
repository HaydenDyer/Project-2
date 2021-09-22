import React, {useState, useEffect} from 'react';

function Tracks(props) {

    const url = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${process.env.REACT_APP_LASTFM_KEY}&format=json
`
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setData(res.tracks.track)
            })
            .catch(console.error)
    }, [])

    while (data.length < 1) {
        return null
    }

    function addCommas(x) {
        let n = parseInt(x)
        let str = n.toLocaleString("en-US")
        return str
    }

    console.log(addCommas(2306802));

    return (
        <section className='list'>
            {data.map(item => {
                return (
                    <div className='item' key={item.name}>
                        <a href={item.url} className='lastFmLink'><h2>"{item.name}" by {item.artist.name}</h2></a>
                        <h4>► Times Played: {addCommas(item.playcount)}</h4>
                    </div>
                )
            })}
        </section>
    )
}

export default Tracks;