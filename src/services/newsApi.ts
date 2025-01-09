import axios from "axios";
import { useEffect, useState } from "react";

export const NewsApi = () => {
  const [ids, setIds] = useState<number[]>([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async (ids: number[]) => {
    try {
      const requests = ids.map((id) =>
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      );
      const responses = await Promise.all(requests);
      const resultData = responses.map((response) => response.data);
      setData(resultData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (nextPage: boolean) => {
    if (nextPage) setPage((prevPage) => prevPage + 1);
    else setPage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    const fetchTopStories = async () => {
      try {
        const response = await fetch(
          "https://hacker-news.firebaseio.com/v0/topstories.json"
        );
        const ids = await response.json();
        // setIds(ids);
        const paginatedIds = ids.slice(
          (page - 1) * itemsPerPage, // Start index
          page * itemsPerPage // End index
        );
        setIds(paginatedIds); // Limiting to the first 10 IDs for demonstration
      } catch (error) {
        console.error("Error fetching top stories:", error);
      }
    };

    fetchTopStories();
  }, [page]);

  useEffect(() => {
    if (ids.length > 0) {
      fetchData(ids);
    }
  }, [ids]);

  //   if (isLoading) return <div>Loading...</div>;

  //   return (
  //     <ul>
  //       {data.map((item, index) => (
  //         <li key={index}>{JSON.stringify(item)}</li>
  //       ))}
  //     </ul>
  //   );

  return { data, isLoading, handlePageChange };
};
