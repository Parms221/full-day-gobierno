import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { Link2 } from "lucide-react";

interface FooterLinks {
  title: string;
  children?: {
    label: string;
    href: string;
    Icon?: React.ElementType;
  }[];
}

export const FOOTER_LINKS: FooterLinks[] = [
  {
    title: "Eventos",
    children: [
      {
        label: "Fullday Gobierno de TIC",
        href: "#fullday",
      },
      {
        label: "Rifas",
        href: "#rifas",
      },
      {
        label: "Bingo",
        href: "#bingo",
      },
      {
        label: "Torneos",
        href: "#torneos",
      },
    ],
  },
  {
    title: "Ayuda",
    children: [
      {
        label: "Preguntas frecuentes",
        href: "#faqs",
        Icon: QuestionMarkCircledIcon,
      },
    ],
  },
  {
    title: "Otros enlaces",
    children: [
      {
        label: "Otros",
        href: "#others",
        Icon: Link2,
      },
    ],
  },
];
