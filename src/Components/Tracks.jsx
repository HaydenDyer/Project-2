import React, {useState, useEffect} from 'react';

function Tracks(props) {

    const url = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=0be892c9ac6fd82d073ae54c07db57e3&format=json'

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

    return (
        <section>
            {data.map(item => {
                return (
                    <div className='list'>
                        <h2 key={item.name}>{item.name}</h2>
                    </div>
                )
            })}
        </section>
    )
}

export default Tracks;