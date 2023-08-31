import { useState, useEffect } from 'react';
import fetchData from '../functions/fetchData';

/**
 * Хук для получения данныых по запросу
 * @param {String=} url
 * @param {Object} options
 * @return
 */
export default function useFetchData (url = '', options = {}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(url, options).then((result) => {
      setData(result);
    });
  });

  return [data, setData];
}
