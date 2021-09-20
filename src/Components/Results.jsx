import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Results(props) {

    const apikey = '0be892c9ac6fd82d073ae54c07db57e3'
    const [data, setData] = useState([])

    useEffect(() => {
        let elvisAPI = fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Elvis+Presley&api_key=${apikey}&format=json`);
        let mjAPI = fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Michael+Jackson&api_key=${apikey}&format=json`);

        Promise.all([elvisAPI, mjAPI])
            .then(values => Promise.all(values.map(value => value.json())))
            .then(finalVals => {
                let elvis = finalVals[0];
                let mj = finalVals[1];
                setData(elvis, mj)
            })
    }, [])

    while (data.length < 1) {
        return null
    }

    return (
        <div className='artist'>
            <h3>{data.artist.name}</h3>
            <Link to={`/details/${data.artist.name}`} key={data.artist.name}>
                <h3>Details</h3>
            </Link>
        </div>
    )
}

export default Results;