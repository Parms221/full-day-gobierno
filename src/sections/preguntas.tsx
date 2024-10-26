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
      "El evento se realizará de forma presencial y virtual. Las ponencias se transmitirán en vivo a través de nuestra plataforma online, para que puedas participar desde cualquier lugar del mundo. Además, contaremos con un espacio físico en la Universidad Nacional de Trujillo para aquellos que deseen asistir de forma presencial.",
  },
  
];

export default function PreguntasFrecuentes() {
  return (
    <div className="w-full bg-[#E5E5E5]">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-center mb-2 ">
          <h1 className="text-2xl font-bold text-[#14213D]  ">
            Preguntas Frecuentes
          </h1>
          <Image
            src="/images/preguntas.png"
            alt="Icono de Preguntas Frecuentes"
            width={50}
            height={50}
          />
        </div>
        <Accordion type="single" collapsible className="w-full">
          {preguntasRespuestas.map(({ id, pregunta, respuesta }) => (
            <AccordionItem
              key={id}
              value={id}
              className="bg-white mb-2 pl-5 pr-5 pb-4"
            >
              <AccordionTrigger className="text-[#FCA311] font-bold text-base">
                {pregunta}
              </AccordionTrigger>
              <AccordionContent className="text-[#14213D] text-sm animate-slide-down">
                {respuesta}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
