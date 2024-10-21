import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { LucideIcon } from "lucide-react";

interface FooterLinks {
  title: string;
  children?: {
    label: string;
    href: string;
    Icon?: React.ElementType;
  }[];
}

export const FOOTER_LINKS : FooterLinks[] = [
  {
    title: "Eventos",
    children: [
      {
        label: "Fullday Gobierno de TIC",
        href: "#",
      },
      {
        label: "Rifas",
        href: "#",
      },
      {
        label: "Bingo",
        href: "#",
      },
      {
        label: "Torneos",
        href: "#",
      },
    ],
  },
  {
    title: "Ayuda",
    children: [
        {
            label: "Preguntas frecuentes",
            href: "#",
            Icon: QuestionMarkCircledIcon
        }
    ]
  },
  {
    title: "Ayuda",
    children: [
        {
            label: "Preguntas frecuentes",
            href: "#",
            Icon: QuestionMarkCircledIcon
        }
    ]
  },  {
    title: "Ayuda",
    children: [
        {
            label: "Preguntas frecuentes",
            href: "#",
            Icon: QuestionMarkCircledIcon
        }
    ]
  },
];
