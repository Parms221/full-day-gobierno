"use client";

import { motion } from "framer-motion";

const width = 16;
const height = 16;
const unitHeight = 4;
const unitWidth = (unitHeight * (width)) / (height);
const space = 1.2;

const top = {
    closed: {
        rotate: 0,
        translateY: 0,
    },
    opened: {
        rotate: 45,
        translateY: space,
    },
};
const center = {
    closed: {
        opacity: 1,
    },
    opened: {
        opacity: 0,
    },
};
const bottom = {
    closed: {
        rotate: 0,
        translateY: 0,
    },
    opened: {
        rotate: -45,
        translateY: -space,
    },
};

export default function MenuButton({ open }: { open: boolean }) {
    const variant = open ? "opened" : "closed";
    const lineProps = {
        stroke: "#000",
        strokeWidth: 1,
        vectorEffect: "non-scaling-stroke",
        initial: "closed",
        animate: variant,
    };

    return (
        <motion.svg
            viewBox={`0 0 ${unitWidth} ${unitHeight}`}
            overflow="visible"
            preserveAspectRatio="none"
            width={width}
            height={height}
        >
            <motion.line
                x1="0"
                x2={unitWidth}
                y1={2 - space}
                y2={2 - space}
                variants={top}
                {...lineProps}
            />
            <motion.line
                x1="0"
                x2={unitWidth}
                y1="2"
                y2="2"
                variants={center}
                {...lineProps}
            />
            <motion.line
                x1="0"
                x2={unitWidth}
                y1={2 + space}
                y2={2 + space}
                variants={bottom}
                {...lineProps}
            />
        </motion.svg>
    );
}
