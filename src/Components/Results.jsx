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
            {data.name}
        </div>
    )
}

export default Results;