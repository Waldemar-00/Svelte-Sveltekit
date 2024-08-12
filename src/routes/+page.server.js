export const load = async ( {fetch } ) =>
{
  const res = await fetch( '/' );
  const result = await res.json();
  console.log(result);

  return {
    result
  }
}