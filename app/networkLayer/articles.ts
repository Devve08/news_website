import { networkCallGet } from "./common/networkCalls";
import { preparePagination } from "./common/networkHelpers";

/**
 * @param {RequestModel}
 * @returns {Promise<AxiosResponse<ResponseModel>>}
 */
export function getTopArticles(data: any) {
  return networkCallGet(
    preparePagination("top-headlines?category=general", data.page, data.limit),
    null
  );
}
export function getSearchedArticles(data: any) {
  return networkCallGet(
    preparePagination(`everything?q=${data?.query}`, data.page, data.limit),
    null
  );
}
