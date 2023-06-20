"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    const style = {
        transform: "translate(-50%, -50%)",
        width: "800px",
        height: "800px",
        borderRadius: "100%",
        filter: " blur(20px)",
        background:
            "radial-gradient(rgba(29, 78, 216, 0.15), transparent 80%);)",
        opacity: 1,
        zIndex: -1,
    };

    const variants = {
        default: {
            x: mousePosition.x - 400,
            y: mousePosition.y - 400,
        },
    };

    return (
        <motion.div
            className={`fixed left-0 top-0`}
            style={style}
            variants={variants}
            animate="default"></motion.div>
    );
};

export default CustomCursor;
