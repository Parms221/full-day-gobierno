"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Clock, LucideIcon, User } from "lucide-react";

export default function Horarios() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-3">
          {cards.map((card) => {
            return <ScheduleCard card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
}

const ScheduleCard = ({ card } : { card: AgendaCard }) => {
  return card.cardType === "main" ? (
    <div
      key={card.id}
      className="group relative h-[500px] w-[500px] overflow-hidden"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // filter image to maket it darker
          filter: "brightness(0.5)",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-primary/20 to-secondary/0 p-8 text-6xl font-black uppercase text-white">
          {card.title}
        </p>
      </div>
    </div>
  ) : (
    <div
      key={card.id}
      className="z-[0] group relative h-[500px] w-[500px] [&>img]:hover:scale-110 overflow-hidden"
    >
      <Image
        src={card.url}
        alt={card.title}
        fill
        className="z-[-1] absolute grayscale hover:grayscale-0 transition-all duration-500 group-hover:grayscale-0 brightness-[40%]"
      />
      <div className="pt-0 px-6 group text-white grid place-content-center h-full">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold ">{card.speaker}</h2>
          <p className="text-sm ">{card.speakerDescription}</p>
        </div>
        <div className="flex justify-center space-x-2 mb-6">
          <Badge variant="secondary" className="px-3 py-1">
            <Clock className="w-4 h-4 mr-1" />
            {card.schedule}
          </Badge>
        </div>
        <h3 className="text-2xl font-semibold mb-2">{card.topic}</h3>
        <ul className="space-y-2 text-sm mb-6">
          {card.subTopics.map(({ topic, Icon }) => (
            <li className="flex items-start" key={crypto.randomUUID()}>
              <Icon className="w-4 h-4 mr-2 mt-1" />
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

interface MainAgendaCard {
  url: string;
  title: string;
  id: number;
  cardType: "main";
}

interface SecondaryAgendaCard {
  cardType?: "secondary";
  url: string;
  title: string;
  id: number;
  speaker: string;
  speakerDescription: string;
  schedule: string;
  topic: string;
  subTopics: {
    topic: string;
    Icon: LucideIcon;
  }[];
}

export type AgendaCard = MainAgendaCard | SecondaryAgendaCard;

const cards: AgendaCard[] = [
  {
    url: "/images/event2.jpg",
    title: "Agenda",
    id: 1,
    cardType: "main",
  },
  {
    id: 2,
    url: "/images/agenda1.jpg",
    title: "Title 2",
    speaker: "Dr. Ana Martínez",
    speakerDescription: "Experta en Inteligencia Artificial",
    schedule: "10:30 AM - 11:30 AM",
    topic: "El Futuro de la IA en la Medicina",
    subTopics: [
      {
        topic: "Introducción a la IA en el campo médico",
        Icon: User,
      },
      {
        topic: "Aplicaciones actuales y casos de estudio",
        Icon: User,
      },
      {
        topic: "Desafíos éticos y regulatorios",
        Icon: User,
      },
      {
        topic: "Perspectivas futuras y Q&A",
        Icon: User,
      },
    ],
  },
  {
    id: 3,
    url: "/images/agenda1.jpg",
    title: "Title 2",
    speaker: "Dr. Ana Martínez",
    speakerDescription: "Experta en Inteligencia Artificial",
    schedule: "10:30 AM - 11:30 AM",
    topic: "El Futuro de la IA en la Medicina",
    subTopics: [
      {
        topic: "Introducción a la IA en el campo médico",
        Icon: User,
      },
      {
        topic: "Aplicaciones actuales y casos de estudio",
        Icon: User,
      },
      {
        topic: "Desafíos éticos y regulatorios",
        Icon: User,
      },
      {
        topic: "Perspectivas futuras y Q&A",
        Icon: User,
      },
    ],
  },
  {
    id: 4,
    url: "/images/agenda1.jpg",
    title: "Title 2",
    speaker: "Dr. Ana Martínez",
    speakerDescription: "Experta en Inteligencia Artificial",
    schedule: "10:30 AM - 11:30 AM",
    topic: "El Futuro de la IA en la Medicina",
    subTopics: [
      {
        topic: "Introducción a la IA en el campo médico",
        Icon: User,
      },
      {
        topic: "Aplicaciones actuales y casos de estudio",
        Icon: User,
      },
      {
        topic: "Desafíos éticos y regulatorios",
        Icon: User,
      },
      {
        topic: "Perspectivas futuras y Q&A",
        Icon: User,
      },
    ],
  },
];
