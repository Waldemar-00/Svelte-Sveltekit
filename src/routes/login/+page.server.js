// @ts-nocheck
import { _PASS_WORD } from '$env/static/private';
import { redirect } from '@sveltejs/kit';
export const load = async ({cookies}) =>
{
  const email =  await cookies.get( 'email' );
  return {
    email
  }
}
export const actions = {
  post: async ({ request, cookies} ) =>
  {
    const data = await request.formData();
    const password = data.get( 'password' );
    if ( password === _PASS_WORD )
    {
      const email = data.get('email');
      cookies.set('email', email, {path: '/'})
      return {success: true, message: email}
    }
    return {success: false, message: 'Wrong password!'}
  },
  delete: async ( { cookies } ) =>
  {
    cookies.delete( 'email', { path: '/' } );
    throw redirect( 303, '/login' );
  }
}