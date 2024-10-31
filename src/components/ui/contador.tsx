import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Contador = () => {
  // Target date for the event
  const targetDate = new Date('2024-12-07').getTime();
  
  // State to store countdown values
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Update countdown every second
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      // Calcular unidades de tiempo
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Animation variants for the counter boxes
  const timeBoxVariants = {
    hidden: { 
      scale: 0.8, 
      opacity: 0,
      y: 20 
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 24 
      }
    }
  };

  // Animation variants for the number changes
  const numberVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 500 }
    }
  };

  return (
    <div className="flex flex-col items-center mt-16 px-4">
      {/* Title with responsive text size */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl md:text-2xl text-white mb-8 text-center"
      >
        Tiempo restante para el evento
      </motion.h2>

      {/* Responsive grid for countdown boxes */}
      <div className="grid grid-cols-4 gap-4 md:gap-8  max-w-2xl">
        {[
          { label: 'DÍAS', value: timeLeft.days },
          { label: 'HORAS', value: timeLeft.hours },
          { label: 'MINUTOS', value: timeLeft.minutes },
          { label: 'SEGUNDOS', value: timeLeft.seconds }
        ].map((item, index) => (
          <motion.div
            key={item.label}
            variants={timeBoxVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            {/* Countdown box with gradient background */}
            <div className="bg-[#2e3138] rounded-md p-4 md:p-6 w-full">
              <motion.div 
                key={item.value} // Key helps React identify when to animate
                variants={numberVariants}
                initial="initial"
                animate="animate"
                className="text-center"
              >
                <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#FF8A00]">
                  {item.value.toString().padStart(2, '0')}
                </span>
              </motion.div>
            </div>
            <span className="text-white mt-2 text-xs md:text-sm">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Contador;