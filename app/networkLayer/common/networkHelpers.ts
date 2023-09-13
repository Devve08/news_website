export const preparePagination = (url: string, page: number, limit: number) => {
  console.log('page', page)
    var finalUrl = url;
    var pageFinal = page ?? 1;
    var limitFinal = limit ?? 1000;
    finalUrl += `&page=${pageFinal}`;
    finalUrl += `&pageSize=${limitFinal}`;
    finalUrl += `&apiKey=167f727e293d48d3ab3f62eeb0595b5a`;
    return finalUrl.replace('?&', '?');
  };