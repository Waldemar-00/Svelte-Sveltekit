// @ts-nocheck
export async function load ( { locals, fetch} )
{
  const response = await fetch( '/request' );

  return {
    message: locals?.message,
    header: response.headers.get('x-custom-header')
  }
}