import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { useState } from "react";

const preguntasRespuestas = [
  {
    id: "item-1",
    pregunta: "¿Que es el full day de gestión de TIC?",
    respuesta: "El VII Full Day de Gestión de TI es un evento organizado por la promoción XXV de la Escuela de Ingeniería de Sistemas de la Universidad Nacional de Trujillo. Este evento tiene como objetivo reunir a profesionales, estudiantes y expertos en tecnologías de la información para compartir conocimientos, experiencias y las últimas tendencias en el campo de la gestión de TI.",
  },
  {
    id: "item-2",
    pregunta: "¿Quiénes pueden asistir al evento?",
    respuesta:
      "El evento está dirigido a profesionales, estudiantes y público en general interesado en las tecnologías de la información y la gestión de TI.",
  },
  {
    id: "item-3",
    pregunta: "¿Hay algún costo de inscripción?",
    respuesta:
      "No, el evento es completamente gratuito. Si deseas obtener un certificado de participación, puedes adquirirlo por un costo simbólico.",
  },
  {
    id: "item-4",
    pregunta: "¿El evento será presencial o virtual?",
    respuesta:
      "El evento se realizará de forma presencial en el auditorio de la Facultad de Ingeniería de Sistemas e Informática de la Universidad Nacional de Trujillo.",
  },
  
];

export default function PreguntasFrecuentes() {
  return (
    <div className="w-full bg-[#E5E5E5] py-8 animated-background">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-3xl font-bold text-[#14213D] relative">
            Preguntas Frecuentes
            <span className="absolute inset-0 bg-[#FCA311] transform scale-x-0 origin-bottom-right transition-transform duration-300 ease-out hover:scale-x-100 hover:origin-bottom-left"></span>
          </h1>
          <Image
            src="/images/preguntas.png"
            alt="Icono de Preguntas Frecuentes"
            width={50}
            height={50}
            className="ml-4"
          />
        </div>
        <Accordion type="single" collapsible className="w-3/4 mx-auto">
          {preguntasRespuestas.map(({ id, pregunta, respuesta }) => (
            <AccordionItem
              key={id}
              value={id}
              className="bg-white mb-4 shadow-lg rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="text-[#FCA311] font-bold text-lg p-4 hover:bg-[#FCA311] hover:text-white transition-colors duration-300">
                {pregunta}
              </AccordionTrigger>
              <AccordionContent className="text-[#14213D] text-base p-4 border-t border-gray-200">
                {respuesta}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}