// @ts-nocheck
import { _PASS_WORD, _EMAIL} from '$env/static/private';
import { redirect } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';
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
    const email = data.get('email');
    if ( password === _PASS_WORD && email === _EMAIL )
    {

      cookies.set('email', email, {path: '/'})
      return {success: true, message: email}
    }
    // return {success: false, message: 'Wrong password!'}
    return fail( 401, {
      message: '<pre>Wrong password or email!<br>Try again.</pre> '})
  },
  delete: async ( { cookies } ) =>
  {
    cookies.delete( 'email', { path: '/' } );
    throw redirect( 303, '/login' );
  }
}