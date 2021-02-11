import { useEffect, useState } from 'react';

interface IData {
  nome: string;
  sigla: string;
}

interface IResponse {
  data: IData[] | null;
  loading: boolean;
}

const useFetch = (url: string, method = 'get') => {
  const [response, setResponse] = useState<IResponse>({
    data: null,
    loading: true,
  });

  useEffect(() => {
    fetch(url, { method })
      .then((response) => response.json())
      .then((data) => setResponse({ data, loading: false }));
  }, [url, method]);

  return response;
};

export default useFetch;
