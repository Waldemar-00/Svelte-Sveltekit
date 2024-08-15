export const load = async ( {fetch, params, url } ) =>
{
  const res = await fetch( '/' );
  const uuid = await res.json();
  console.log(params.slug, url.search, uuid);

  return {
    uuid,
    slug: params.slug,
    search: url.search,
  }
}