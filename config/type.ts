import { ReactNode } from "react";

export type BlogConfig = {

    url: string;

    title: string;

    description: string;

    author: string;

    typist: string;

    articles_per_load: number;

    navigation: {

        title: string;
  
        href: string;
    }[];
 
    background_image:
        | {
        option: "APIBackgroundImage";
        settings: {
            url: string;
            filter: | "grid" | "dot" | "none";
        } }

    hero:
        | {
        option: "IconHero";
        settings: {
            icon_path: string;
        } }

    header_logo:
      
        | {
        option: "TextLogo";
        settings: {
   
            text_front: string;

            text_middle: string;
 
            text_end: string;
 
            text_bottom: string;
        } }
  
        | { option: "ImageLogo";
            settings: {
   
                image_path: string;
            } }

    social: {
    
        title: string;

        icon: ReactNode;

        href: string;
    }[];

  
    colors: {
        primary_color: {
            light: string;
            dark: string;
        },
        secondary_color: {
            light: string;
            dark: string;
        },
        accent_color: {
            light: string;
            dark: string;
        },
    }
}