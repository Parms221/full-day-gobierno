"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import MenuButton from "./menu-button";
import { AnimatePresence, motion } from "framer-motion";
import { ROUTES } from "./router.contants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ColorNavStates, useColorNav } from "./color-nav.context";

export default function RouterSmNav() {
    const [open, setOpen] = useState(false);
    const path = usePathname();
    const {type} = useColorNav();
    return (
        <div>
            <Button
                variant={"ghost"}
                size={"icon"}
                className={cn(type != ColorNavStates.WHITE ? "hover:bg-white/10" : "")}
                onClick={() => {
                    setOpen(!open);
                }}
            >
                <MenuButton open={open} />
            </Button>

            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            onClick={() => setOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed top-full left-0 z-30 w-full h-dvh bg-black bg-opacity-50"
                        ></motion.div>
                        <motion.div
                            className="absolute top-full left-0 z-40 w-full overflow-hidden"
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                        >
                            <div className="bg-white drop-shadow-md p-3 border-b">
                                <div className="flex flex-col gap-3">
                                    {ROUTES.map((route) => (
                                        <Enlace
                                            key={route.href}
                                            href={route.href}
                                            active={route.active(path)}
                                            setOpen={setOpen}
                                        >
                                            {route.name}
                                        </Enlace>
                                    ))}

                                    <Button>Inscríbete ahora</Button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

function Enlace({
    children,
    href,
    active,
    setOpen,
}: {
    children: React.ReactNode;
    href: string;
    active: boolean;
    setOpen: (open: boolean) => void;
}) {
    return (
        <li
            onClick={() => {
                setTimeout(() => setOpen(false), 200);
            }}
            className={cn(
                "relative z-10 block font-semibold cursor-pointer text-sm transition-colors ease-in-out duration-200",
                active ? "text-primary" : "text-gray-400"
            )}
        >
            <Link className="h-full flex items-center" href={href}>
                {children}
            </Link>
        </li>
    );
}
