// @ts-nocheck
export function load ( { locals, request } )
{
console.log(request);


  return {
    message: locals?.message
  }
}