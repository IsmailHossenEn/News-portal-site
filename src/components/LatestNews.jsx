import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const LatestNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("https://openapi.programming-hero.com/api/news/category/08")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch news");
        }
        return res.json();
      })
      .then((data) => {
        setNews(data.data.slice(0, 5));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="bg-base-200 p-2">
        <p className="text-center text-red-500">{error}</p>
      </div>
    );
  }
  return (
    <div className="flex gap-2 items-center bg-base-200 p-2">
      <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p>
      <Marquee pauseOnHover={true} speed={100} className="space-x-10">
        {news.map((item) => (
          <Link key={item._id} to={`/news/${item._id}`}>
            {item.title} 🔴
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
