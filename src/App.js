import { useEffect, useState } from "react";
import { fetchNews } from "./lib/apis";
import News from "./components/news";

function App() {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("news");
  useEffect(() => {
    fetchNews(query).then((response) => {
      if (response.news) {
        const {
          news: { articles },
        } = response;
        setNews(articles);
      }
    });
  }, [query]);
  return (
    <>
      <News news={news} handleChange={setQuery} value={query} />
    </>
  );
}

export default App;
