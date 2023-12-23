import { NextResponse } from 'next/server';
import { topArtists } from "../../lib/spotify";

export const GET = async () => {
 const response = await topArtists();
 const { items } = await response.json();

 const artists = items.slice(0, 8).map((artist: any) => ({
   title: artist.name,
   coverImage: artist.images[0]?.url,
//    artist: track.artists.map((_artist: any) => _artist.name).join(", "),
   url: artist.external_urls.spotify,
//    coverImage: track.album.images[1],
 }));

 return NextResponse.json(artists);
};