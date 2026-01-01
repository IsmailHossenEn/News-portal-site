import { FaShareAlt, FaRegEye } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const NewsCard = (props = {}) => {
  const { news } = props || {};

  return (
    <div className=" p-4 bg-gray-900 rounded-lg shadow-md mb-4">
      {/* Author Information */}
      <div className="flex items-center mb-4">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="font-semibold text-white text-xs md:text-base">
            {news.author.name}
          </p>
          <p className="text-white text-xs md:text-base">
            {news.author.published_date}
          </p>
        </div>
        <div className="ml-auto">
          <FaShareAlt className="text-white" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg md:text-xl font-semibold mb-2 text-white">
        {news.title}
      </h2>

      {/* Thumbnail Image */}
      <img
        src={news.image_url}
        alt="Thumbnail"
        className="w-full  object-cover rounded-lg mb-4"
      />

      {/* Details */}
      <p className="text-sm mb-4 text-white">
        {news.details.slice(0, 150)}...{" "}
        <Link to={`/news/${news._id}`} className="text-primary">
          Read More
        </Link>
      </p>

      {/* Ratings and Views */}
      <div className="flex items-center justify-between text-white text-sm">
        {/* Rating */}
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <AiFillStar
              key={i}
              className={`text-yellow-500 ${
                i < Math.round(news.rating.number) ? "" : "opacity-50"
              }`}
            />
          ))}
          <span className="ml-2 font-semibold">{news.rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center">
          <FaRegEye className="mr-1 text-white" />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;

// Sample news

//
