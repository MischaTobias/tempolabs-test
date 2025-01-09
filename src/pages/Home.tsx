import { NewsApi } from '../services/newsApi';

export const Home = () => {
  const {data, isLoading, handlePageChange} = NewsApi();
  
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div>
      <ul>
      {data.map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
    </ul>
      </div>
      <div>
        <button onClick={() => handlePageChange(false)}>Previous Page</button>
        <button onClick={() => handlePageChange(true)}>Next Page</button>
      </div>
    </>
  );
};
