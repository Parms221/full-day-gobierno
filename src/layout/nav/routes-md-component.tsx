"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ROUTES } from "./router.contants";



export default function RouterNav() {
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
        ref: null as HTMLLIElement | null,
    });

    const [cursor, setCursor] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });

    const path = usePathname();

    return (
        <ul
            onMouseLeave={() => {
                setPosition((pv) => ({
                    ...pv,
                    left: pv.ref?.offsetLeft || 0,
                    width: pv.ref?.offsetWidth || 0,
                    opacity: 0,
                }));

                setCursor((pv) => ({
                    ...pv,
                    opacity: 0,
                }));
            }}

            onClick={() => {
                setCursor((pv) => ({
                    ...pv,
                    opacity: 0,
                }))
            }}

            className="relative flex w-fit"
        >

            {
                ROUTES.map((route) => (
                    <Tab
                        key={route.href}
                        active={route.active(path)}
                        setPosition={setPosition}
                        setCursor={setCursor}
                        href={route.href}
                    >
                        {route.name}
                    </Tab>
                ))
            }

            {process.env.NODE_ENV !== "production" && (
                <Tab
                    href="/components"
                    setCursor={setCursor}
                    active={path == "/components"}
                    setPosition={setPosition}
                >
                    Componentes
                </Tab>
            )}

            <Cursor position={position} />
            <Cursor2 position={cursor} />
        </ul>
    );
}
function Tab({
    children,
    setPosition,
    href,
    active,
    setCursor
}: {
    children: React.ReactNode;
    setPosition: React.Dispatch<
        React.SetStateAction<{
            left: number;
            width: number;
            opacity: number;
            ref: HTMLLIElement | null;
        }>
    >;
    setCursor: React.Dispatch<
        React.SetStateAction<{
            left: number;
            width: number;
            opacity: number;
        }>
    >;
    href: string;
    active: boolean;
}) {
    useEffect(() => {
        if (active) {
            setPosition((pv) => ({
                ...pv,
                left: ref.current ? ref.current.offsetLeft : 0,
                width: ref.current ? ref.current.offsetWidth : 0,
                ref: ref.current,
            }));
        }
    }, [active, setPosition]);

    const ref = useRef<HTMLLIElement>(null);

    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref?.current) return;

                const { width } = ref.current.getBoundingClientRect();

                // setPosition((pv) => ({
                //     ...pv,
                //     // left: ref.current ? ref.current.offsetLeft : 0,
                //     // width,
                //     opacity: 1,
                //     ref: active ? ref.current : pv.ref,
                // }));

                setCursor({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                })
            }}
            className={cn(
                "relative z-10 block font-semibold cursor-pointer text-sm transition-colors ease-in-out duration-200",
                active ? "text-primary" : "text-gray-500"
            )}
        >
            <Link className="px-3 py-1.5 h-full flex items-center" href={href}>
                {children}
            </Link>
        </li>
    );
}

function Cursor({
    position,
}: {
    position: {
        left: number;
        width: number;
        opacity: number;
        ref: HTMLLIElement | null;
    };
}) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { ref, opacity, ...data } = position;
    return (
        <motion.li
            animate={{
                ...data,
            }}
            className="absolute bottom-0 z-0 h-[2px] rounded-full bg-secondary"
        />
    );
}


function Cursor2({
    position,
}: {
    position: {
        left: number;
        width: number;
        opacity: number;
    };
}) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return (
        <motion.li
            animate={{
                ...position,
            }}
            className="absolute z-0 h-full rounded-full bg-primary/10"
        />
    );
}
