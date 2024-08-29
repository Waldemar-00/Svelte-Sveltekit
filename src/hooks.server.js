// @ts-nocheck
export const handle = async ( { event, resolve } ) =>
{
  event.locals.message = 'Before resolve we added this message!'
  const response = await resolve( event );
  console.log(response.headers, "HANDLE");

  response.headers.set( 'Custom-header', 'tomato' );
  return response
};
export const handleFetch = async ( { event, request, fetch } ) =>
{
  if ( request.url.startsWith( 'http://localhost:5173/request' ) )
  {
    // request = await new Request( request.url.replace( 'http://localhost:5173/request', 'http://localhost:5173/request', request) );
    console.log(event.request.headers);
    event.request.headers.set( 'Custom-header_1', 'handleFetch works before handle with fetch requests' );
    //! mutation!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    console.log(event.request.headers.get('Custom-header_1'));

    console.log(event.request.headers.get('Custom-header'));

    request = await new Request( 'http://localhost:5173/request', request);
    //console.log(event.request.headers.get('custom-cookies'));

  }
  return fetch(request);
}
//! transformPageChunk
// export const handle = async ( { event, resolve } ) => await resolve( event, {
//   transformPageChunk: ({html}) => html.replace("Welcome to SvelteKit", 'Hi, bro, here in the Sveltekit ;-)')
// } );
//! handleFetch
//! handleError

export const handleError = ({error}) => {
  return {
    code: error.code,
    message: error.message,
    frame: error.frame, //! ????
  }
}