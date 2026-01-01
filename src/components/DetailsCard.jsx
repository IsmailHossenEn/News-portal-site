import { Link } from "react-router-dom";

const DetailsCard = ({ news }) => {
  const { title, image_url, published_date, tags, details, category_id } = news;

  return (
    <div className="items-start shadow-md border rounded-lg p-5">
      {/* Image */}
      <figure className="w-full aspect-[16/9]">
        <img src={image_url} alt={title} />
      </figure>

      {/* Content */}
      <div className="card-body space-y-3">
        <h2 className="card-title text-lg font-bold leading-snug">{title}</h2>

        <p className="text-sm text-gray-100 leading-relaxed line-clamp-4">
          {details}
        </p>

        <div className="card-actions justify-start">
          <Link
            to={`/category/${category_id}`}
            className="btn btn-error btn-sm text-white"
          >
            ← All news in this category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
