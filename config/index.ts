import { BlogConfig } from "@/config/type";
const { createElement } = require("react");
import { AcademicCapIcon, Square3Stack3DIcon } from "@heroicons/react/24/solid";
const colors = require("tailwindcss/colors");


/**
 * Configure file for the blog.
 *
 */

export const blogConfig: BlogConfig = {
    url: '',
    title: "Yorozuya",
    description: "A blog system made with Next.js.",
    author: "Ari1009",
    typist: "By Ari1009",
    articles_per_load: 5,

    navigation: [
        {
            title: "Item 1",
            href: "#"
        },
        {
            title: "Item 2",
            href: "#"
        }
    ],

    background_image: {
        option: "APIBackgroundImage",
        settings: {
            url: "https://www.loliapi.com/acg/pc",
            filter: "grid"
        }
    },

    hero: {
        option: "IconHero",
        settings: {
            icon_path: "/logo.png"
        }
    },

    header_logo: {
        option: "TextLogo",
        settings: {
            text_front: "Yorozuya",
            text_middle: "シ",
            text_end: "Server",
            text_bottom: "SUP"
        }
    },

    social: [
        {
            title: "GitHub",
            icon: createElement(Square3Stack3DIcon),
            href: "https://github.com"
        },
        {
            title: "Twitter",
            icon: createElement(AcademicCapIcon),
            href: "https://twitter.com"
        }
    ],

    colors: {
        primary_color: {
            light: colors.cyan[400],
            dark: colors.cyan[600]

        },
        secondary_color: {
            light: colors.red[400],
            dark: colors.red[600]
        },
        accent_color: {
            light: colors.pink[400],
            dark: colors.pink[600]
        },
    }
}
