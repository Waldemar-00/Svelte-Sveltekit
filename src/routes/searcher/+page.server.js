// @ts-nocheck
// import { deserialize } from '$app/forms';
import {items} from "../../db/items.js"
export async function load ( { url } )
{
  // console.log( url, 'page server' );
  const search = ( await url.searchParams.get( 'q' ) )?.toLowerCase();
  for ( const item of Object.keys( items ) )
  {
    if ( item === search )
    {
      return {
        q: items[item]
      }
    }
  }
  return {
    q: `No such item: ${search}`
  }
}