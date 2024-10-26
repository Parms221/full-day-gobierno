import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const preguntasRespuestas = [
  {
    id: "item-1",
    pregunta: "¿Es accesible?",
    respuesta: "Sí. Se adhiere al patrón de diseño WAI-ARIA.",
  },
  {
    id: "item-2",
    pregunta: "¿Está estilizado?",
    respuesta:
      "Sí. Viene con estilos predeterminados que coinciden con la estética de los otros componentes.",
  },
  {
    id: "item-3",
    pregunta: "¿Está animado?",
    respuesta:
      "Sí. Está animado por defecto, pero puedes desactivarlo si lo prefieres.",
  },
];

export default function PreguntasFrecuentes() {
  return (
    <div className="w-full bg-[#E5E5E5]">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-center ">
          <h1 className="text-2xl font-bold text-[#14213D] font-inter mr-2">
            Preguntas Frecuentes
          </h1>
          <Image
            src="/src/images/preguntas.png"
            alt="Icono de Preguntas Frecuentes"
            width={20}
            height={20}
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
