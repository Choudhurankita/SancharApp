import React, { useState, useEffect, useCallback } from "react";
import api from "../../api/api";
import type { newsArticle } from "../../types/interface";

const Home: React.FC = () => {
    const apiKey = import.meta.env.VITE_NEWSAPI;
    const [articles, setArticles] = useState<newsArticle[]>([]);
    const [heroArticles, setHeroArticles] = useState<newsArticle[]>([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get(
                    `top-headlines?country=us&category=business&apiKey=${apiKey}`
                );
                setArticles(res.data.articles);
                setHeroArticles(res.data.articles.slice(0, 3));
            } catch (err) {
                console.error("Error:", err);
            }
        };

        if (apiKey) {
            fetchData();
        }
    }, [apiKey]);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % heroArticles.length);
    }, [heroArticles.length]);

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? heroArticles.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        if (heroArticles.length === 0) return;
        const timer = setInterval(nextSlide, 4000);
        return () => clearInterval(timer);
    }, [heroArticles.length, nextSlide]);

    return (
        <div className="max-w-7xl mx-auto px-6 py-8">

            {/* Hero Carousel */}
            <div className="mb-12 relative h-[420px] rounded-2xl overflow-hidden shadow-lg">
                {heroArticles.map((article, index) => (
                    <div
                        key={index}
                        className="absolute inset-0 transition-opacity duration-700"
                        style={{
                            opacity: index === currentSlide ? 1 : 0,
                            zIndex: index === currentSlide ? 1 : 0,
                        }}
                    >
                        <img
                            src={article.urlToImage || "https://via.placeholder.com/1200"}
                            alt={article.title}
                            className="w-full h-full object-cover"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                        {/* Content */}
                        <div className="absolute bottom-0 p-8 text-white max-w-2xl">
                            <h2 className="text-3xl font-bold leading-tight">
                                {article.title}
                            </h2>
                            <p className="text-sm mt-3 text-gray-200">
                                {article.description}
                            </p>
                        </div>
                    </div>
                ))}

                {/* Controls */}
                {heroArticles.length > 1 && (
                    <>
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-md text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/40 transition"
                        >
                            ‹
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-md text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/40 transition"
                        >
                            ›
                        </button>

                        {/* Dots */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {heroArticles.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentSlide(i)}
                                    className={`h-2.5 rounded-full transition-all ${i === currentSlide
                                            ? "w-6 bg-white"
                                            : "w-2.5 bg-white/50"
                                        }`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Section Title */}
            <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
                Top Breaking News
            </h2>

            {/* News Grid */}
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article, index) => (
                    <div
                        key={index}
                        className="group bg-white border rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
                    >
                        <div className="overflow-hidden">
                            <img
                                src={article.urlToImage || "https://via.placeholder.com/400"}
                                alt={article.title}
                                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                            />
                        </div>

                        <div className="p-5">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                                {article.title}
                            </h3>

                            <p className="text-gray-500 text-sm line-clamp-3">
                                {article.description}
                            </p>

                            <a
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 mt-4 text-indigo-600 font-medium hover:gap-2 transition-all"
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

export default Home;
