// /app/artists/page.ts

'use client'
import { useEffect, useState } from 'react';

const Topartists = () => {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
      fetch('/api/topArtists')
        .then((response) => response.json())
        .then((data) => setArtists(data));
    }, []);

    console.log(artists)

    return (
        <div className="flex flex-wrap justify-center items-center p-24">
            {artists.map((artist, index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-4 p-4 rounded shadow">
                <h2 className="text-xl font-bold mb-2">{artist.name}</h2>
                <img src={artist.coverImage} alt={artist.title} width={300} height={300}/>
                <a href={artist.url} className="text-blue-500 underline mb-2">Listen on Spotify</a>
                </div>
            ))}
        </div>
    )
}

export default Topartists
