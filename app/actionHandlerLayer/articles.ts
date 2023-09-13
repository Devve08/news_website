import prepareErrorResponse from '../errorHandlerLayer/errorHandler';
import { getSearchedArticles, getTopArticles } from '../networkLayer/articles';
export function getTopArticlesAction(data:any) {
    return getTopArticles(data)
      .then(({data}) => {
        return Promise.resolve(data);
      })
      .catch(error => {
        return Promise.reject(prepareErrorResponse(error));
      });
  }

  export function getSearchedArticlesAction(data:any) {
    return getSearchedArticles(data)
      .then(({data}) => {
        return Promise.resolve(data);
      })
      .catch(error => {
        return Promise.reject(prepareErrorResponse(error));
      });
  }