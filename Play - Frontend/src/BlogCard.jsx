import React, { memo } from "react";
import { Link } from "react-router";

const BlogCard = memo(({ id, title, date, description, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform hover:scale-105 overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <span className="text-sm text-gray-500">{date}</span>
        <h3 className="text-xl font-bold text-purple-700 mt-2">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>

        {/* Navigate to blog details */}
        <Link
          to={`/blog/${id}`}
          className="mt-4 inline-block text-yellow-500 font-bold hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
});

export default BlogCard;