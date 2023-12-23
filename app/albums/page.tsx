// /app/tracks/page.ts

'use client'

import { useEffect, useState } from 'react';

const Topalbums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
      fetch('/api/topAlbums')
        .then((response) => response.json())
        .then((data) => setAlbums(data));
    }, []);

    return (
        <div className="flex flex-wrap justify-center items-center p-24">
            {albums.map((album, index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-4 p-4 rounded shadow">
                <h2 className="text-xl font-bold mb-2">{album.title}</h2>
                <p className="text-gray-600 mb-2">{album.artist}</p>
                <a href={track.url} className="text-blue-500 underline mb-2">Listen on Spotify</a>
                <img src={album.coverImage.url} alt={album.title} width={300} height={300}/>
                </div>
            ))}
        </div>
    )
}

export default Topalbums