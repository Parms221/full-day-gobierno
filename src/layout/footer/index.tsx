"use client";
import FooterLinks from "@/layout/footer/footer-links";
import FooterSocials from "./footer-socials";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

export default function Footer() {
  return (
    <div className="bg-primary text-white relative">
      <div className="mx-auto max-w-screen-2xl h-128 w-full grid place-content-center text-center gap-4 p-24">
        <Image
          src="/background-vector.svg"
          alt="Fondo vector"
          className="z-0 absolute inset-0 max-w-screen-2xl -top-[330px] w-full h-full object-cover mx-auto"
          width={0}
          height={0}
          loading="lazy"
        />
        <div className="z-[1] space-y-4">
          <h1 className="text-3xl">¿Interesado? ¡Contáctanos!</h1>
          <p className="max-w-2xl">
            <strong className="text-secondary">FullDay Gobierno de TI</strong>{" "}
            es una conferencia que potenciará tus conocimientos en la gestión de
            tecnologías de la información.
          </p>
          <Button variant={"outline"} className="mx-auto rounded-none w-32">
            Más información
          </Button>
        </div>
      </div>
      <motion.footer
        className="flex flex-col z-[2]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        <FooterLinks />

        <div className="py-4 bg-foreground/30 text-secondary flex flex-col items-center justify-center">
          <FooterSocials />
          <div className="my-2 mx-4">
            <i>© 2024 Promoción XXV de Ingeniería de Sistemas UNT</i>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
