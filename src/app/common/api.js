import {API_URL} from 'env';
import {fetchAPI} from 'common/api';

function storePushToken(urlParams, body) {
  const url = `${API_URL}/pushtoken/register${urlParams}`;
  return fetchAPI(url, 'POST', body);
}

export const API = {
  storePushToken,
};
