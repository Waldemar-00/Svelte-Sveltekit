// @ts-nocheck
//! NavigationEvent
//! unexpected error
//! 500 'Internal error'
//! https://sentry.io/

export const handleError = ({event, error}) =>
{
  console.log( event );
  console.log(error);

  const errorId = crypto.randomUUID();
  return {
    message: error.message,
    frame: error.frame,
    errorId
  }
}

//! if error in the handle hook or on server.js Sveltekit will answer via a page with JSON or error.html