import React, {useState, useEffect} from 'react';

function Artists(props) {

    const url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${process.env.REACT_APP_LASTFM_KEY}&format=json`
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setData(res.artists.artist)
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

    return (
        <section>
            {data.map(item => {
                return (
                    <div className='item' key={item.name}>
                        <a href={item.url} className='lastFmLink'><h2 className='name'>{item.name}</h2></a>
                        <h4 className='count'>♫ Listeners: {addCommas(item.listeners)}</h4>
                    </div>
                )
            })}
        </section>
    )
}

export default Artists;