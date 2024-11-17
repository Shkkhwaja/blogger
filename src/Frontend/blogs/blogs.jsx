import Link from "next/link";
import React from "react";

const Blogs = () => {
  // Define an array of blog data objects
  const blogPosts = [
    {
      id: 1,
      img: "https://readymadeui.com/images/food.webp",
      title: "Lorem Ipsum Dolor",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...",
      date: "08 April 2024",
      link: "javascript:void(0);"
    },
    {
      id: 2,
      img: "https://readymadeui.com/images/food11.webp",
      title: "Consectetur Adipiscing",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...",
      date: "08 April 2024",
      link: "javascript:void(0);"
    },
    {
      id: 3,
      img: "https://readymadeui.com/images/food22.webp",
      title: "Lorem Ipsum Sit Amet",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...",
      date: "08 April 2024",
      link: "javascript:void(0);"
    },
    {
      id: 4,
      img: "https://readymadeui.com/images/food33.webp",
      title: "Lorem Ipsum Sit Amet",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...",
      date: "08 April 2024",
      link: "javascript:void(0);"
    },
    {
      id: 5,
      img: "https://readymadeui.com/images/food44.webp",
      title: "Lorem Ipsum Sit Amet",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...",
      date: "08 April 2024",
      link: "javascript:void(0);"
    },
    {
      id: 6,
      img: "https://readymadeui.com/images/food55.webp",
      title: "Lorem Ipsum Sit Amet",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...",
      date: "08 April 2024",
      link: "javascript:void(0);"
    }
  ];

  return (
    <div className="p-4 font-[sans-serif]">
      <div className="max-w-6xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-12 text-center leading-10">
            Stay updated with the latest blog posts.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded overflow-hidden">
              <img src={post.img} alt={post.title} className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{post.title}</h3>
                <p className="text-gray-500 text-sm">{post.description}</p>
                <p className="text-gray-800 text-[13px] font-semibold mt-4">{post.date}</p>
                <Link
                  href={`/blogpage/${post.id}`}
                  className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-purple-600 hover:bg-purple-700 text-white text-[13px]"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
