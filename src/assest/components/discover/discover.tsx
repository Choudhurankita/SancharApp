import React, { useState, useEffect } from "react";
import api from "../../api/api";
import type { newsArticle } from "../../types/interface";


const Discover: React.FC = () => {

    const apiKey = import.meta.env.VITE_NEWSAPI;

    const [input, setInput] = useState<string>("");
    const [articles, setArticles] = useState<newsArticle[]>([]);

    useEffect(() => {

        const fetchData = async () => {

            try {

                const query = input.trim() === "" ? "us" : input;
                const res = await api.get(
                    `everything?q=${query}&sortBy=popularity&apiKey=${apiKey}`
                );

                setArticles(res.data.articles);

            } catch (err) {
                console.error(err);
            }

        };

        fetchData();

    }, [input,apiKey]);

    return (
        <div className="max-w-5xl mx-auto p-6">

            <h2 className="text-2xl font-bold mb-4">
                Discover News
            </h2>

            <input
                type="text"
                placeholder="Search news..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full p-3 border rounded mb-6"
            />
            

              
            {/* News Grid */}
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                {articles.map((article, index) => (

                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
                    >

                        <img
                            src={article.urlToImage || "https://via.placeholder.com/400"}
                            alt={article.title}
                            className="w-full h-48 object-cover"
                        />

                        <div className="p-4">

                            <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                                {article.title}
                            </h3>

                            <p className="text-gray-600 text-sm line-clamp-3">
                                {article.description}
                            </p>

                            <a
                                href={article.url}
                                target="_blank"
                                className="inline-block mt-4 text-blue-600 font-medium hover:underline"
                            >
                                Read More →
                            </a>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default Discover;