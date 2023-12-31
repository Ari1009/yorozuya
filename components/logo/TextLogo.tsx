"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
const logoSetting = require("@/config").blogConfig.header_logo.settings

export default function TextLogo({logoHover}: {logoHover: boolean}) {
    const controls = useAnimation();
    const textControls = useAnimation();

    useEffect(() => {
        if (logoHover) {
            controls.start("rotate");
            textControls.start({ scale: 1, opacity: 1 });
        } else {
            controls.stop();
            textControls.start({ scale: 1, opacity: 0 });
        }
    }, [logoHover, controls, textControls]);

    const rotationVariant = {
        rotate: {
            rotate: [0, 360],
            transition: {
                repeat: Infinity,
                ease: "linear",
                duration: 1,
            },
        },
    };

    return (
        <div className="flex flex-col items-center -space-y-1 font-medium">
            <div className="flex items-end space-x-3 md:text-xl">
                <div className={cn({
                        "bg-primary_color dark:bg-primary_color-dark text-white": logoHover,
                        "bg-white/40 text-primary_color dark:text-primary_color-dark": !logoHover,
                    },
                    "pt-3 pb-1 rounded-xl items-center"
                )}>
                    {logoSetting.text_front}
                </div>
                <motion.div
                    className={cn({
                            "dark:text-primary_color-dark": logoHover,
                        },
                        "pb-1 dark:text-inherit text-primary_color"
                    )}
                    animate={controls}
                    variants={rotationVariant}
                >
                    {logoSetting.text_middle}
                </motion.div>
                <div className={cn({
                        "dark:text-primary_color-dark": logoHover,
                    },
                    "pb-1 dark:text-inherit text-primary_color"
                )}>{logoSetting.text_end}</div>
            </div>
            <motion.div
                className={"text-[10px] font-normal text-primary_color dark:text-primary_color-dark"}
                animate={textControls}
                transition={{ type: "ease", duration: 0.5 }}
                initial={{ opacity: 0 }}
            >
                {logoSetting.text_bottom}
            </motion.div>
        </div>
    )
}
