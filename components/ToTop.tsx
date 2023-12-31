"use client";

import { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import IconButton from "@/components/IconButton";

export default function ToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 0) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    const buttonVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1 }
    }

    return (
        <motion.div
            onClick={scrollToTop}
            className={"fixed z-30 bottom-0 right-0 mr-2 lg:mr-6 mb-8"}
            variants={buttonVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}>
            <IconButton>
                <ChevronUpIcon className={"text-primary_color dark:text-primary_color-dark w-6 h-6"} />
            </IconButton>
        </motion.div>
    )
}