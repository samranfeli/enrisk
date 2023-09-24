import { PropsWithChildren } from "react";
import { Inter } from 'next/font/google';

import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ['latin'] });

const Layout: React.FC<PropsWithChildren> = props => {
    return (
        <>
            <Header />
            <main className={`md:page-min-height ${inter.className}`} >
                {props.children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;