
import { network } from './network';



/**
 * Name: GET
 * @param params ==> {potential query params}
 * @returns {Promise<AxiosResponse<any>>}
 */
export function networkCallGet(path :any, params:any) {
  return network('').then((call) => {
    return call.get(path, {params: params});
  });
}

/**
 * Name: Post
 * @param path
 * @param params
 * @returns {Promise<AxiosResponse<any>>}
 */
export function networkCallPost(path:any, params: any) {
  return network('').then(call => {
    return call.post(path, params);
  });
}



