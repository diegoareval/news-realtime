import { useEffect, useState } from "react";
import { fetchNews } from "./lib/apis";
import News from "./components/news";

function App() {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("news");
  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    fetchNews(query, startDate).then((response) => {
      if (response.news) {
        const {
          news: { articles },
        } = response;
        setNews(articles);
      }
    });
  }, [query, startDate]);
  return (
    <>
      <News news={news} handleChange={setQuery} value={query} setStartDate={setStartDate} startDate={startDate} />
    </>
  );
}

export default App;
