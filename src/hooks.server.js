// @ts-nocheck
//!default
export const handle = async ( { event, resolve } ) =>
{
  event.locals.message = 'Before resolve we added this message!'
  const response = await resolve( event );
  response.headers.set( 'x-custom-header', 'tomato' );
  return response
};

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