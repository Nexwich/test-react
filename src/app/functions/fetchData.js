import store from '../store';

/**
 * Получение данныых по запросу
 * @param {String=} url
 * @param {Object} options
 * @return
 */
export default async function fetchData (url = '', options = {}) {
  let result = [];

  store.dispatch({ type: 'LOG_ADD', data: { message: 'loadStart' } });

  const response = await fetch(url, {
    ...options,
    method: 'POST',
  });

  if (response.ok) {
    result = response.json();

    store.dispatch({ type: 'LOG_ADD', data: { message: 'loadComplete' } });
  } else {
    store.dispatch({ type: 'LOG_ADD', data: { message: response.statusMessage } });
  }

  return result;
}
