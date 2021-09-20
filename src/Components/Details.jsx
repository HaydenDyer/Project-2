import React, {useState, useEffect} from 'react';

function Details(props) {

    const url = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=the+beatles&api_key=0be892c9ac6fd82d073ae54c07db57e3&format=json`
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                setData(json)
                console.log(json);
            })
            .catch(console.error)
    }, [url])

    while (data.length < 1) {
        return null
    }

    return (
        <div>
            
        </div>
    );
}

export default Details;