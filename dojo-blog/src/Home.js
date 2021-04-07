import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const PORT = 5000;
  const { error, isPending, data: blogs } = useFetch(
    `http://localhost:${PORT}/blogs`
  );

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
