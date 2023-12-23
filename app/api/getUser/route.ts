import { NextResponse } from 'next/server';
import { getUser } from "../../lib/spotify";

export const GET = async () => {
 const response = await getUser(); // Assuming getUser is the function that fetches the user data
 const user = await response.json();

 // Extract the necessary data
 const { display_name, images } = user;
 const imageUrl = images && images.length > 0 ? images[0].url : null;

 // Return the data
 return NextResponse.json({ displayName: display_name, imageUrl });
};
