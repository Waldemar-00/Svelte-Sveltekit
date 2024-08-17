// @ts-nocheck
export const load = async ( {fetch, params, url} ) =>
{
  const res = await fetch( '/' );
  const uuid = await res.json();

  return {
    uuid,
    slug: params.slug,
    search: url.search,
  }
}