import { PropsWithChildren } from "react";
import { Inter } from 'next/font/google';

import Header from "./Header";
import Footer from "./Footer";
import useScrollability from "@/context";

const inter = Inter({ subsets: ['latin'] });

const Layout: React.FC<PropsWithChildren> = props => {

    const context = useScrollability();

    return (
        <div className={context.isScrollable ? "" : "h-screen overflow-hidden"}>
            <Header />
            <main className={`md:page-min-height ${inter.className}`} >
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;