"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import Contador from '../components/ui/contador';

export default function Banner() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <div className="min-h-screen gradient-bg overflow-hidden">
     
      {/* <nav className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
       
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-orange-500 font-bold text-2xl"
          >
            LOGO
          </motion.span>

      
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-4 md:gap-8 text-white text-sm md:text-base"
          >
            <a href="#" className="hover:text-orange-500 transition-colors">Inicio</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Ponentes</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Nosotros</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Eventos</a>
          </motion.div>

         
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
          >
            Inscríbete ahora
          </motion.button>
        </div>
      </nav> */}

    <div  style={{
                background: 'url("banner-vector-opacity.png")',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            className="flex flex-col justify-center banner-height-m">

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-32 mt-8 md:mt-10">

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

      
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-3 md:order-1"
          >
            {/* info fecha */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-2 text-white mb-8"
            >
              <div className="flex-1 flex items-center justify-start gap-2 text-[#FF8A00] md:mb-10">
                    <Calendar className="w-12 h-12" />
                    <div className="flex items-end">
                        <h2 className="text-6xl font-extrabold">14</h2>
                        <div className="items-end font-bold text-xl">
                            <p>DIC</p>
                            <p>2024</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/*Texto principal.izquierda */}
            <motion.h1 
              variants={itemVariants}
              className="text-3xl md:text-5xl text-white mb-4"
            >
              <span className="handwritten text-white">FULL DAY</span>
              <br />
              <span className="font-bold text-[#FF8A00]">Gestión de TIC</span>
            </motion.h1>

            {/* Descripcion */}
            <motion.p 
              variants={itemVariants}
              className="text-gray-300 mb-8 max-w-lg text-sm md:text-base"
            >
              Evento de gestión TI con expertos de empresas reconocidas en Perú,
              compartiendo experiencias y conocimientos sobre tendencias
              tecnológicas actuales.
            </motion.p>

            {/*Botón */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#FF8A00] text-[#FF8A00]  bg-transparent px-8 py-3 rounded-full font-medium hover:bg-[#FF8A00] hover:text-white transition-colors flex items-center gap-2"
              /* className="bg-orange-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-orange-600 transition-colors" */
            ><Calendar className="w-5 h-5" />
              Inscríbete ahora
            </motion.button>

          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-2"
          >

            <div className="flex items-start justify-center w-full gap-5 grid-cols-2">
                <div className="flex-1 flex-none items-start justify-end h-full">
                    <img src="banner-right-2.jpg" alt="" className="w-20 h-20 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 rounded-full object-cover" />
                </div>
                <div className="flex-1 flex-none justify-start items-center h-full">
                    <img src="banner-right-1.jpg" alt="" className="w-64 h-64 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full object-cover" />
                </div>

            </div>
          </motion.div>
        </div>

        {/* Contador */}
        <Contador />
      </div>
    </div>
    </div>
  );
}

