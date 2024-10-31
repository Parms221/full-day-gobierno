"use client";
import React, { useState, useEffect } from 'react';

export default function Section2() {
    const [expandedCard, setExpandedCard] = useState<number | null>(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const eventsPerPage = 3;

    const timelineData = [
        {
            year: "2023",
            content: "IX FULL DAY GESTION DE TI",
            details: "Detalles adicionales sobre el evento del año 2023.",
            image: "https://unitru.edu.pe/webfiles//Noticia/2024/3/0_Noticia_120320240157.jpeg",
            detailImages: [
                "https://es.web.img3.acsta.net/pictures/17/07/12/16/23/035660.jpg",
                "https://www.espectaculos-mza.com/files/image/5/5893/6373ead2d521b_700_1061!.jpg?s=5b40b52d25a73371c1e6b3cab29d4a98&d=1668541140",
                "https://media.diariolasamericas.com/p/6a24f3f9a7d7c5641c2f9f3bb9ae1384/adjuntos/216/imagenes/000/134/0000134022/855x0/smart/will-smith-los-actores-pueden-cambiar-el-mundo.jpg"
            ],
            detailPonentes: [
                "Ponente 1",
                "Ponente 2",
                "Ponente 3"
            ]
        },
        {
            year: "2022",
            content: "VIII FULL DAY GESTION DE TI",
            details: "Detalles adicionales sobre el evento del año 2022.",
            image: "https://unitru.edu.pe/webfiles//Noticia/2021/8/0_Noticia_31082021013913.JPG",
            detailImages: [
                "https://example.com/image4.jpg",
                "https://example.com/image5.jpg",
                "https://example.com/image6.jpg"
            ],
            detailPonentes: [
                "Ponente 1",
                "Ponente 2",
                "Ponente 3"
            ]
        },
        {
            year: "2021",
            content: "VII FULL DAY GESTION DE TI",
            details: "Detalles adicionales sobre el evento del año 2021.",
            image: "https://unitru.edu.pe/webfiles///Noticia/2024/10//0_Noticia_181020240302.jpg",
            detailImages: [
                "https://example.com/image7.jpg",
                "https://example.com/image8.jpg",
                "https://example.com/image9.jpg"
            ]
        },
        {
            year: "2020",
            content: "Descripción del evento del año 2015.",
            details: "Detalles adicionales sobre el evento del año 2015.",
            image: "https://unitru.edu.pe/webfiles//Noticia/2022/8/0_Noticia_220820221244.jpg",
            detailImages: [
                "https://example.com/image10.jpg",
                "https://example.com/image11.jpg",
                "https://example.com/image12.jpg"
            ]
        },
        {
            year: "2019",
            content: "Descripción del evento del año 2020.",
            details: "Detalles adicionales sobre el evento del año 2020.",
            image: "https://dpaunt.edu.pe/admin/publicaciones/publicacion_1666194083.jpg",
            detailImages: [
                "https://example.com/image13.jpg",
                "https://example.com/image14.jpg",
                "https://example.com/image15.jpg"
            ]
        },
        {
            year: "2018",
            content: "Descripción del evento del año 2020.",
            details: "Detalles adicionales sobre el evento del año 2020.",
            image: "https://dpaunt.edu.pe/admin/publicaciones/publicacion_1666194083.jpg",
            detailImages: [
                "https://example.com/image13.jpg",
                "https://example.com/image14.jpg",
                "https://example.com/image15.jpg"
            ]
        },
    ];

    const handleCardClick = (index: number): void => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    const handleNext = () => {
        if (currentIndex + eventsPerPage < timelineData.length) {
            setCurrentIndex(currentIndex + eventsPerPage);
            setExpandedCard(currentIndex + eventsPerPage); // Mostrar el primer evento de la nueva página
        }
    };

    const handlePrev = () => {
        if (currentIndex - eventsPerPage >= 0) {
            setCurrentIndex(currentIndex - eventsPerPage);
            setExpandedCard(currentIndex - eventsPerPage); // Mostrar el primer evento de la nueva página
        }
    };

    const handleCloseDetails = () => {
        setExpandedCard(null);
    };

    useEffect(() => {
        setExpandedCard(0);
    }, []);

    return (
        <section className="relative py-12 bg-gray-100 animate-fade-in">
            <section className="relative bg-[#14213D] flex items-end justify-center text-white text-lg font-semibold -mt-16 h-40">
                <div className="absolute bottom-0 w-full">
                    <svg
                        viewBox="0 0 1440 320"
                        className="w-full h-24"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="url(#grad)"
                            d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,213.3C840,203,960,149,1080,149.3C1200,149,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                        ></path>
                        <defs>
                            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" style={{ stopColor: "#f3f4f6" }} />
                                <stop offset="100%" style={{ stopColor: "#f3f4f6" }} />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <p className="mb-20 text-center text-2xl text-[#FCA311]">UN CAMINO TRAZADO POR CAMBIOS</p>
            </section>

            <div className="max-w-4xl mx-auto px-4 relative ml-10 lg:ml-72 ">
                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-500 "></div>
                    {timelineData.slice(currentIndex, currentIndex + eventsPerPage).map((item, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-start mb-10 relative ">
                            <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-[#14213d] text-[#FCA311] rounded-full font-bold shadow-lg z-10">
                                {item.year}
                            </div>

                            <div className="ml-[-20px] md:ml-10 w-full md:w-80">
                                <div
                                    className={`transition-all duration-300 transform bg-[#14213d] shadow-md rounded-lg p-4 cursor-pointer hover:shadow-xl hover:scale-105 ${expandedCard === currentIndex + index ? "scale-110" : ""}`}
                                    onClick={() => handleCardClick(currentIndex + index)}
                                >
                                    <img src={item.image} alt={`Evento ${item.year}`} className="w-full h-32 object-cover rounded-t-lg transition-transform duration-500 transform hover:scale-110" />
                                    <p className={`mt-2 transition-opacity duration-500 text-white font-bold text-center ${expandedCard === currentIndex + index ? 'opacity-100' : 'opacity-0 h-0'}`}>{item.content}</p>
                                </div>
                                {index < eventsPerPage - 1 && (
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-500"></div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Card de detalles superpuesto, siempre en la parte superior */}
                {expandedCard !== null && (
                    <div className={`absolute ${expandedCard !== null ? "top-16 left-1/2 transform -translate-x-1/2" : "left-[85%]"} w-full md:w-1/2 bg-[#14213d] p-4 rounded-lg shadow-md z-20 lg:ml-72`}>
                        <button
                            onClick={handleCloseDetails}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 lg:hidden"
                        >
                            ✖
                        </button>
                        <h4 className="text-lg font-semibold text-[#FCA311]">Detalles:</h4>
                        <p className='text-white'>{timelineData[expandedCard].details}</p>
                        <h4 className="text-lg font-semibold text-[#FCA311]">Ponentes:</h4>

                        <div className="flex flex-col items-center mt-4 w-full">
                            {timelineData[expandedCard].detailImages.map((detailImage, idx) => (
                                <div key={idx} className="flex flex-row items-center mb-4 w-full">
                                    <div className="relative">
                                        <img src={detailImage} alt={`Detail ${idx}`} className="h-24 w-24 object-cover rounded-lg shadow-md" />
                                    </div>
                                    <div className="ml-4 text-center">
                                        <p className="text-lg font-semibold text-white">
                                            {timelineData[expandedCard].detailPonentes?.[idx] || "Ponente desconocido"}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                )}
            </div>

            {/* Controles de navegación */}
            <div className="flex gap-10 mt-4 justify-center">
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className={`px-4 py-2 bg-[#14213D] text-white rounded-lg font-bold ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    Anterior
                </button>
                <button
                    onClick={handleNext}
                    disabled={currentIndex + eventsPerPage >= timelineData.length}
                    className={`px-4 py-2 bg-[#14213D] text-white rounded-lg font-bold ${currentIndex + eventsPerPage >= timelineData.length ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    Siguiente
                </button>
            </div>
        </section>
    );
}
