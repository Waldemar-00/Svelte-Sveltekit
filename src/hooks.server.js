// @ts-nocheck
//! RequestEvent
export const handle = async ( { event, resolve } ) =>
{
  event.locals.message = 'Before resolve we added this message!'

  const prevHeaders = event.request.headers;

  let response = await resolve( event );

  response = new Response( response.body, {
    ...response,
    headers: prevHeaders
  })
  return response
};
export const handleFetch = async ( { event, request, fetch } ) =>
{
  if ( request.url.startsWith( 'http://localhost:5173/request' ) )
  {
    event.request.headers.set( 'x-custom-header_1', 'handleFetch works before handle with fetch requests' );
    request = await new Request( 'http://localhost:5173/request', request);
  }
  return fetch(request);
}


export const handleError = ({error}) => {
  return {
    code: error.code,
    message: error.message,
    frame: error.frame, //! ????
  }
}






// request = await new Request( request.url.replace( 'http://localhost:5173/request', 'http://localhost:5173/request', request) );
// console.log(event.request.headers);



    //! transformPageChunk
// export const handle = async ( { event, resolve } ) => await resolve( event, {
//   transformPageChunk: ({html}) => html.replace("Welcome to SvelteKit", 'Hi, bro, here in the Sveltekit ;-)')
// } );
//! handleFetch
//! handleError