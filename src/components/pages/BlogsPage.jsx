import React from 'react';
import { blogsData } from '../data/blogs';
import BlogCard from '../BlogCard';

const BlogsPage = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#f5f5f5]">Fitness & Wellness Blog</h1>
          <p className="text-lg text-[#a3a3a3] mt-2">Expert advice to help you on your fitness journey.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;