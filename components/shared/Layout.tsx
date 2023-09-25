import { PropsWithChildren } from "react";

import Header from "./Header";
import Footer from "./Footer";
import useScrollability from "@/context";

const Layout: React.FC<PropsWithChildren> = props => {

    const context = useScrollability();

    return (
        <div className={context.isScrollable ? "" : "h-screen overflow-hidden"}>
            <Header />
            <main className="md:page-min-height" >
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;