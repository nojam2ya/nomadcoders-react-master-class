import { getSearchByMulti } from '@src/apis';
import { Loading, Pagination, Wrap } from './style';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('keyword');
  const [pages, setPages] = useState([1]);

  const [params, setParams] = useState({
    query: query ?? '',
    page: 1,
  });

  const { data, isFetching } = useQuery({
    queryKey: ['search-keyword', { params }],
    queryFn: () => getSearchByMulti(params),
    enabled: !!query,
  });

  const handlePage = (page: number) => {
    if (!data) return;

    if (page === params.page) return;

    if (page < 1 || page > data.total_pages) return;

    setParams((prev) => ({ ...prev, page }));
  };

  useEffect(() => {
    if (!data) return;

    if (data.total_pages < 10) {
      setPages(
        new Array(data.total_pages).fill(0).map((_, index) => index + 1),
      );
      return;
    }

    const startPage = params.page <= 5 ? 1 : params.page - 4;
    const endPage =
      params.page <= 5
        ? 10
        : params.page + Math.ceil(10 / 2) > data.total_pages
        ? data.total_pages
        : params.page + 10 / 2;
    setPages(
      new Array(endPage - startPage + 1)
        .fill(0)
        .map((_, index) => startPage + index),
    );
  }, [data, params.page]);

  const moveFirstPage = () => {
    if (params.page !== 1) setParams((prev) => ({ ...prev, page: 1 }));
  };

  const moveLastPage = () => {
    if (!data) return;
    if (params.page !== data.total_pages)
      setParams((prev) => ({ ...prev, page: data.total_pages }));
  };

  console.log(data);

  return (
    <Wrap>
      {isFetching || !data ? (
        <Loading>Loading</Loading>
      ) : (
        <>
          {data?.results.map((data) => (
            <div key={data.id}>{data.name}</div>
          ))}
          <Pagination>
            <button className="first" onClick={moveFirstPage}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" />
              </svg>
            </button>
            <ul>
              {pages.map((num) => (
                <li
                  key={num}
                  style={{ color: params.page === num ? 'red' : 'white' }}
                  onClick={() => handlePage(num)}
                >
                  {num}
                </li>
              ))}
            </ul>
            <button className="last" onClick={moveLastPage}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
              </svg>
            </button>
          </Pagination>
        </>
      )}
    </Wrap>
  );
};

export default Search;
