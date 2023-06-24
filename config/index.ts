import { BlogConfig } from "@/config/type";
const { createElement } = require("react");
import { MusicalNoteIcon, PhoneIcon } from "@heroicons/react/24/solid";
const colors = require("tailwindcss/colors");


/**
 * Configure file for the blog.
 *
 */
//const randomNumber = Math.floor(Math.random() * 8) + 1;

export const blogConfig: BlogConfig = {
    url: '',
    title: "Yorozuya",
    description: "A blog system made with Next.js.",
    author: "Ari1009",
    typist: "By Ari1009",
    articles_per_load: 5,

    navigation: [
        {
            title: "Github",
            href: "https://github.com/Ari1009"
        },
        {
            title: "LinkedIn",
            href: "https://www.linkedin.com/in/arihant-pal-2b8714228/"
        }
    ],
    
    background_image: {
        option: "APIBackgroundImage",
        settings: {
            url: "/img/"+ (Math.floor(Math.random() * 6) + 1) +".jpg" ,
            filter: "grid"
        }
    },

    hero: {
        option: "IconHero",
        settings: {
            icon_path: "/ele.png"
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
            title: "Mail",
            icon: createElement(PhoneIcon),
            href: "mailto:arihant0pal@gmail.com"
        },
        {
            title: "Spotify",
            icon: createElement(MusicalNoteIcon),
            href: "https://open.spotify.com/playlist/37i9dQZF1DX0hAXqBDwvwI"
        }
    ],

    colors: {
        primary_color: {
            light: colors.cyan[400],
            dark: colors.cyan[600]

        },
        secondary_color: {
            light: colors.cyan[400],
            dark: colors.cyan[600]
        },
        accent_color: {
            light: colors.pink[400],
            dark: colors.pink[600]
        },
    }
}
