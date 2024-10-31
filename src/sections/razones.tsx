import React from "react";
import { FiLock, FiUserCheck, FiCpu, FiUsers } from "react-icons/fi";

interface CardProps {
    title: string;
    subtitle: string;
    Icon: React.ElementType; // Using ElementType to allow any React component
    href?: string; // Optional href prop
}

const Card: React.FC<CardProps> = ({ title, subtitle, Icon, href }) => {
    return (
        <a
            href={href}
            className="w-full p-4 border-[2px] border-[#FCA311] rounded-2xl relative overflow-hidden group bg-[#E5E5E5] shadow-2xl transition-transform duration-300 transform hover:scale-105"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-[#14213D] to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

            <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-[#E5E5E5] group-hover:rotate-12 transition-transform duration-300" />
            <Icon className="mb-2 text-2xl text-[#14213D] group-hover:text-white transition-colors relative z-10 duration-300" />
            <h3 className="text-lg group-hover:text-[#FCA311] relative z-10 duration-300 text-[#FCA311] font-bold">
                {title}
            </h3>
            <p className="text-[#14213D] group-hover:text-violet-200 relative z-10 duration-300">
                {subtitle}
            </p>
        </a>
    );
};

export default function Razones() {
    return (
        <div className="p-5 md:p-10 lg:p-20">
            <div className="flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#14213D] mb-4 transform transition-transform duration-500 hover:scale-110">
                        Transforma Tu Futuro
                    </h1>
                    <p className="text-lg md:text-xl text-gray-800 mb-5">
                        ¡Descubre Por Qué Este Evento Es Imperdible!
                    </p>
                </div>
            </div>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <Card
                    title="INNOVACION Y COMPETITIVIDAD"
                    subtitle="Aprende a integrar tecnologías avanzadas para innovar en tu empresa y destacarte frente a la competencia."
                    Icon={FiCpu}
                    href={undefined}
                />
                <Card
                    title="MEJORA EN LA TOMA DE DECISIONES"
                    subtitle="Conoce el uso de herramientas tecnológicas para tomar decisiones más informadas y estratégicas."
                    Icon={FiUserCheck}
                    href={undefined}
                />
                <Card
                    title="COLABORACION EFICIENTE"
                    subtitle="Descubre cómo las TIC pueden mejorar la colaboración entre equipos y departamentos, facilitando la comunicación y el trabajo en conjunto."
                    Icon={FiUsers}
                    href={undefined}
                />
                <Card
                    title="SEGURIDAD Y CONTINUIDAD"
                    subtitle="Descubre las mejores prácticas de ciberseguridad y gestión de riesgos, y asegura la protección de tus datos."
                    Icon={FiLock}
                    href={undefined}
                />
            </div>
        </div>
    );
}
