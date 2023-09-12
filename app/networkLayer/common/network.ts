import axios from 'axios';

function prepareEnvironmentUrl(val: any) {
  switch (val) {
    case 'prod':
      return 'https://newsapi.org/v2/';
   
    case 'local':
      return 'http://localhost:8080/';
    default:
      break;
  }
}

const BASE_URL = prepareEnvironmentUrl('prod');

function isStatusValid(status: any) {
  return status >= 200 && status <= 300;
}

export function network(contentType: any) {
  
    return Promise.resolve(
      axios.create({
        baseURL: `${BASE_URL}`,
        validateStatus: status => {
          return isStatusValid(status);
        },
        headers: {
          'Content-Type': contentType ? contentType : 'application/json',
        },
        timeout: 10000,
      }),
    );
}
