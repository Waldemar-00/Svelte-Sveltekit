// @ts-nocheck
// import { deserialize } from '$app/forms';
import { items } from "../../db/items.js"
let searchItems = [];
export async function load ( { url } )
{
  const search = ( await url.searchParams.get( 'q' ) )?.toLowerCase();
  if ( search?.length === 0 ) searchItems.length = 0;
  if ( search?.length > 1 )
  {
    for ( const key of Object.keys( items ) )
  {
    if (key.includes(search) && !searchItems.includes(items[ key ]))
    {
      searchItems.push(items[ key ]);
    }
    }
    if ( searchItems?.length > 0 )
    {
      return {
        q: searchItems
      }
    }
  }
  return {
    q: `No such item: ${search? search : ''}`
  }
}