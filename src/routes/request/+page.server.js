// @ts-nocheck
export async function load ( { locals, fetch} )
{
  const response = await fetch( '/request', {
    headers: {
      'Custom-header': 'some cookies you want',
      'Custom-header_1': 'forexample cookies'
    }
  } );
  return {
    message: locals?.message,
    header: await response.headers.get( 'Custom-header' ),
    handleFetchHearders: await response.headers.get( 'Custom-header_1' ),
  }
}