"use client";

import Giscus from "@giscus/react";
import { useEffect, useState} from "react";

export default function GiscusComments () {
    let theme = "preferred_color_scheme";
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (mounted) {
        if (localStorage.theme === "dark") {
            theme = "dark_dimmed";
        }
        if (localStorage.theme === "light") {
            theme = "light";
        }
    }
    return (
        <div className={"md:px-8 mt-8"}>
            <Giscus
                repo={"Ari1009/yorozuya"}
                repoId={"R_kgDOJx2SsA"}
                category={"Announcements"}
                categoryId={"DIC_kwDOJx2SsM4CXb40"}
                mapping={"url"}
                inputPosition={"bottom"}
                theme={theme}
                lang={"en"}
                loading={"lazy"}
            />
        </div>

    )
}