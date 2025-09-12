import React from 'react';

const BlogCard = ({ post }) => {
  const { title, author, date, category, image, excerpt } = post;

  return (
    <div className="bg-[#121212] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#dc2626]/20">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <p className="text-sm text-[#dc2626] font-semibold uppercase">{category}</p>
        <h3 className="text-xl font-bold text-[#f5f5f5] my-2 hover:text-[#dc2626] transition-colors cursor-pointer">{title}</h3>
        <p className="text-xs text-[#a3a3a3]">By {author} on {date}</p>
        <p className="text-[#a3a3a3] mt-4">{excerpt}</p>
        <button className="mt-4 text-sm font-semibold text-[#dc2626] hover:text-[#b91c1c] transition-colors">
          Read More →
        </button>
      </div>
    </div>
  );
};

export default BlogCard;