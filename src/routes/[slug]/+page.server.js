// @ts-nocheck
export const load = ({params, url}) =>
{
  console.log(params);
  console.log(url.search);
  return {
    slug: params.slug,
    search: url.search,
  }
}