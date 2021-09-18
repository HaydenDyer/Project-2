import React, {useState, useEffect} from 'react';

function Results(props) {

    const url = 'https://api.discogs.com/artists/1373'
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                setData(json)
                console.log(json);
            })
            .catch(console.error)
    }, [])

    // if (!data.length) {
    //     return null
    // }

    return (
        <div>
            <h3>Picture:</h3> <img src={data.images[0].resource_uri} alt={data.name} srcset="" />
            <h3>Stage Name:</h3> {data.name}
            <h3>Born as:</h3> {data.realname}
            <h3>Bio:</h3> {data.profile}
        </div>
    )
}

export default Results;