export const preparePagination = (url: string, page: number, limit: number) => {
  console.log('page', page)
    var finalUrl = url;
    var pageFinal = page ?? 1;
    var limitFinal = limit ?? 1000;
    finalUrl += `&page=${pageFinal}`;
    finalUrl += `&pageSize=${limitFinal}`;
    finalUrl += `&apiKey=7433957d2837412c99d025c16f01760c`;
    return finalUrl.replace('?&', '?');
  };