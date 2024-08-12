import { json } from "@sveltejs/kit";
export function GET ({request})
{
  request.headers.set( 'Content-Type', 'application/json' );
  console.log(request.headers);
  const uuid = crypto.randomUUID();
  // return new Response( '100' );
  return json( uuid );
}