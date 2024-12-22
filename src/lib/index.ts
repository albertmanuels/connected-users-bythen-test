export function generateQueryParams(data: {[k: string]: any}) {
  const ret = [];
  for (const d in data)
    ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
  return ret.join('&');
}