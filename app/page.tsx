'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
 const [tracks, setTracks] = useState([]);

 useEffect(() => {
   fetch('/api/topTracks')
     .then((response) => response.json())
     .then((data) => setTracks(data));
 }, []);

 return (
   <main className="flex min-h-screen flex-col items-center justify-between p-24">
     {tracks.map((track, index) => (
       <div key={index}>
         <h2>{track.title}</h2>
         <p>{track.artist}</p>
         <a href={track.url}>Listen on Spotify</a>
         <img src={track.coverImage.url} alt={track.title} width={300} height={300}/>
         {/* <Image src={track.coverImage.url} alt={track.title} width={300} height={300} /> */}
       </div>
     ))}
   </main>
 );
}



