import { PropsWithChildren } from "react";

import Header from "./Header";
import Footer from "./Footer";
import useScrollability from "@/context";

const Layout: React.FC<PropsWithChildren> = props => {

    const context = useScrollability();

    return (
        <div className={context.isScrollable ? "" : "h-screen overflow-hidden"}>
            <Header />
            <main className="page-min-height-mobile md:page-min-height relative z-10" >
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;