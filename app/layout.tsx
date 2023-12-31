import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollProgressProvider } from "@/components/ScrollProgressProvider";
import ToTop from "@/components/ToTop";
import { ThemeProvider } from "@/components/ThemeProvider"
import { TailwindIndicator } from "@/components/TailwindIndicator";
import { cn } from "@/lib/utils";
import BackgroundImage from "@/components/background-image/BackgroundImage";

const inter = Roboto_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Yorozuya',
  description: 'Ari1009 blog!!',
}

type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn(inter.className, "static")}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <ScrollProgressProvider>
                        <BackgroundImage/>
                        <div className={"absolute top-0 w-full"}>
                            <div className={"flex flex-col"}>
                                <Header />
                                {children}
                                <Footer />
                                <TailwindIndicator />
                                <ToTop />
                            </div>
                        </div>
                    </ScrollProgressProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
