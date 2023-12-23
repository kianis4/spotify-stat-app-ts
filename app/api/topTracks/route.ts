import { NextResponse } from 'next/server';
import { topTracks } from "../../lib/spotify";

export const GET = async () => {
 const response = await topTracks();
 const { items } = await response.json();

 const tracks = items.slice(0, 8).map((track: any) => ({
   title: track.name,
   artist: track.artists.map((_artist) => _artist.name).join(", "),
   url: track.external_urls.spotify,
   coverImage: track.album.images[1],
 }));

 return NextResponse.json(tracks);
};
