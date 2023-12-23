import { NextResponse } from 'next/server';
import { topAlbums } from "../../lib/spotify";

export const GET = async () => {
 const response = await topAlbums();
 const { items } = await response.json();

 const albums = items.slice(0, 8).map((album: any) => ({
   title: album.name,
//    artist: album.artists.map((_artist) => _artist.name).join(", "),
//    url: album.external_urls.spotify,
//    coverImage: album.images[1],
 }));

 return NextResponse.json(albums);
};