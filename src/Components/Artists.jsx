import React, {useState, useEffect} from 'react';

function Artists(props) {

    const url = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=0be892c9ac6fd82d073ae54c07db57e3&format=json'

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

    return (
        <section className='list'>
            {data.map(item => {
                return (
                    <div className='item' key={item.name}>
                        <h2 className='name'>{item.name}</h2>
                        <h3 className='count'>{item.playcount}</h3>
                    </div>
                )
            })}
        </section>
    )
}

export default Artists;