// @ts-nocheck
export async function load ( { locals, fetch} )
{
  const response = await fetch( '/request', {
    headers: {
      'x-custom-header': 'some cookies you want',
      'x-custom-header_1':'some cookies you want_1111'
    }
  } );

  return {
    message: locals?.message,
    header: await response.headers.get( 'x-custom-header' ),
    handleFetchHearders: await response.headers.get( 'x-custom-header_1' ),
  }
}