// import React, { useState, useEffect } from "react";
// import api from "../../api/api";
// import type { newsArticle } from "../../types/interface";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";



// const Home: React.FC = () => {

//     const apiKey = "3ffde59cdb68434fac1feab46020e0bc";
//     const [articles, setArticles] = useState<newsArticle[]>([]);
//     const [heroArticles, setHeroArticles] = useState<newsArticle[]>([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const res = await api.get(
//                     `top-headlines?country=us&category=business&apiKey=${apiKey}`
//                 );
//                 setArticles(res.data.articles);
//                 setHeroArticles(res.data.articles.slice(0, 3));
//             } catch (err) {
//                 console.error("Error:", err);
//             }
//         }

//         if (apiKey) {
//             fetchData();
//         }
//     }, [apiKey]);

//     return (
//         <div className="max-w-7xl mx-auto p-6">
//             <div className="mb-10">

//                 <Swiper
//                     modules={[Autoplay, Pagination, Navigation]}
//                     spaceBetween={30}
//                     slidesPerView={1}
//                     autoplay={{ delay: 4000 }}
//                     pagination={{ clickable: true }}
//                     navigation
//                 >

//                     {heroArticles.map((article, index) => (

//                         <SwiperSlide key={index}>

//                             <div className="relative h-[400px] rounded-lg overflow-hidden">

//                                 <img
//                                     src={article.urlToImage || "https://via.placeholder.com/1200"}
//                                     alt={article.title}
//                                     className="w-full h-full object-cover"
//                                 />

//                                 <div className="absolute bottom-0 bg-black/60 text-white p-6 w-full">
//                                     <h2 className="text-2xl font-bold">
//                                         {article.title}
//                                     </h2>

//                                     <p className="text-sm mt-2">
//                                         {article.description}
//                                     </p>
//                                 </div>

//                             </div>

//                         </SwiperSlide>

//                     ))}

//                 </Swiper>

//             </div>

//             <h2 className="text-3xl font-bold mb-8 text-center">
//                 Top Breaking News
//             </h2>

//             {/* News Grid */}
//             <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

//                 {articles.map((article, index) => (

//                     <div
//                         key={index}
//                         className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
//                     >

//                         <img
//                             src={article.urlToImage || "https://via.placeholder.com/400"}
//                             alt={article.title}
//                             className="w-full h-48 object-cover"
//                         />

//                         <div className="p-4">

//                             <h3 className="text-lg font-semibold mb-2 line-clamp-2">
//                                 {article.title}
//                             </h3>

//                             <p className="text-gray-600 text-sm line-clamp-3">
//                                 {article.description}
//                             </p>

//                             <a
//                                 href={article.url}
//                                 target="_blank"
//                                 className="inline-block mt-4 text-blue-600 font-medium hover:underline"
//                             >
//                                 Read More →
//                             </a>

//                         </div>

//                     </div>

//                 ))}

//             </div>

//         </div>
//     )
// }

// export default Home;