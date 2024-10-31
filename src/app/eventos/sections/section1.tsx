"use client";
import React from 'react';

export default function Section1() {
    return (
        <section
            className="relative flex items-center justify-center h-[75vh] bg-cover bg-center"
            style={{ backgroundImage: 'url("https://unitru.edu.pe/webfiles//Noticia/2021/12/0_Noticia_151220210131.png")' }}
        >
            {/* Blue semi-transparent overlay */}
            <div className="absolute inset-0 bg-blue-950 opacity-50"></div>

            {/* Text with animation */}
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 animate-zoomPulse">
                    PASADO QUE ILUMINA EL PRESENTE
                </h1>
                <p className="text-base md:text-lg lg:text-3xl animate-blink">
                    Recorre las experiencias que impulsaron cambios y nuevos comienzos
                </p>
            </div>

            {/* Custom styles for the animations */}
            <style jsx>{`
                @keyframes zoomPulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }

                @keyframes blink {
                    0%, 50%, 100% { opacity: 1; }
                    25%, 75% { opacity: 0.5; }
                }

                .animate-zoomPulse {
                    animation: zoomPulse 3s ease-in-out infinite;
                }

                .animate-blink {
                    animation: blink 2s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}
