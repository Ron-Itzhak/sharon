import React from "react";

const Articles = () => {
  return (
    <section id="articles" className="bg-neutral py-16 px-8">
      <h2 className="text-3xl font-bold text-black text-center mb-8">
        Latest Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example Article Card */}
        <div className="bg-pink shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Article Title 1</h3>
          <p className="text-gray-600 mb-4">
            A brief introduction to the article to grab the readers attention.
          </p>
          <a href="#" className="text-green hover:underline">
            Read More →
          </a>
        </div>
        {/* Add more article cards here */}
      </div>
    </section>
  );
};

export default Articles;
