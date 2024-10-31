"use client";
import { createContext, useContext, useState } from "react";
import { useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

export enum ColorNavStates {
    TRANSPARENT,
    WHITE,
    TRANSPARENT_WITH_WHITE_TEXT,
}

interface IColorNavContextProps {
    type: ColorNavStates;
}

const colorNavContext = createContext<IColorNavContextProps>(
    {} as IColorNavContextProps
);

export default function ColorNav({ children }: { children: React.ReactNode }) {
    const { scrollY } = useScroll();
    const [type, setType] = useState<ColorNavStates>(ColorNavStates.WHITE);

    scrollY.on("change", (y) => {
        if (
            y > 15 &&
            y < 760 &&
            type != ColorNavStates.TRANSPARENT_WITH_WHITE_TEXT
        ) {
            setType(ColorNavStates.TRANSPARENT_WITH_WHITE_TEXT);
            return;
        }

        if (y < 15 && type != ColorNavStates.WHITE) {
            setType(ColorNavStates.WHITE);
            return;
        }

        if (
            y >= 760 &&
            type != ColorNavStates.WHITE
        ) {
            setType(ColorNavStates.WHITE);
            return;
        }
    });

    return (
        <colorNavContext.Provider value={{ type }}>
            <div
                className={cn(
                    "sticky top-0 z-40 w-full backdrop-blur-md transition-colors duration-500",
                    type == ColorNavStates.WHITE
                        ? "bg-white/50 text-black shadow-md"
                        : type == ColorNavStates.TRANSPARENT
                        ? "text-white bg-transparent"
                        : type == ColorNavStates.TRANSPARENT_WITH_WHITE_TEXT
                        ? "bg-white/5 shadow"
                        : ""
                )}
            >
                {children}
            </div>
        </colorNavContext.Provider>
    );
}

export function useColorNav() {
    const context = useContext(colorNavContext);

    if (!context) {
        throw new Error("something bad happened");
    }

    return context;
}
