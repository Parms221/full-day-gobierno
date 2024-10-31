"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";

export default function Ubicacion() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 } // Cambia el valor para ajustar cuándo se considera visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="py-3 mt-8 flex flex-col items-center">
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Ubicacion
      </motion.h1>

      <motion.div
        ref={sectionRef}
        className="flex flex-col md:flex-row w-full max-w-6xl mx-auto p-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
        }
        transition={{ duration: 1 }}
      >
        {/* Sección izquierda */}
        <motion.div
          className="flex-1 p-4 mr-0 md:mr-4 mb-4 md:mb-0"
          initial={{ opacity: 0, x: -20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold">
            Universidad Nacional de Trujillo
          </h2>
          <p className="mt-2">
            Nuestro campus está estratégicamente ubicado en el corazón de la
            ciudad, ofreciendo fácil acceso a recursos culturales, oportunidades
            profesionales y una vibrante vida estudiantil.
          </p>
          <div className="flex items-center mt-4 bg-primary text-secondary rounded-lg p-6">
            <MdLocationOn className="mr-2" />
            <div className="flex flex-col">
              <span className="font-semibold">Dirección:</span>
              <p className="text-[#E5E5E5]">
                Av. Juan Pablo II, Trujillo 13011
              </p>
            </div>
          </div>
        </motion.div>

        {/* Sección derecha */}
        <motion.div
          className="flex-1 bg-white p-4"
          initial={{ opacity: 0, x: 20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/front-unt.png"
            alt="Universidad Nacional de Trujillo"
            className="w-full h-auto rounded-md"
            objectFit="cover"
            layout="responsive"
            height={400}
            width={600}
          />
        </motion.div>
      </motion.div>

      {/* Iframe con la ubicación */}
      <motion.div
        className="w-full mt-4 md:pl-20 md:pr-20 pl-8 pr-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
        }
        transition={{ duration: 0.5 }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1974.942697558941!2d-79.03823155310218!3d-8.113150388988064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3d9c2f584a39%3A0x9ffa4b4052a512f7!2sTeatr%C3%ADn%20de%20Humanidades!5e0!3m2!1ses!2spe!4v1730166345064!5m2!1ses!2spe"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
      </motion.div>
    </div>
  );
}
