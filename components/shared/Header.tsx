import Image from "next/image"
import Link from "next/link";
import Navigation from "./Navigation";
import { useRouter } from "next/router";

import { Twitter, Linkedin } from "./icons";

const Header: React.FC = () => {

    const { asPath } = useRouter();

    const isHome = asPath === '/';

    return (
        <header className={`bg-stone-100 relative z-20 ${isHome ? "lg:absolute lg:bg-black/40 lg:right-0 lg:top-0 lg:left-0" : ""}`}>
            <div className="max-w-7xl mx-auto px-3">
                <div className="lg:flex justify-between items-center">
                    <div className="flex items-center justify-between lg:justify-start lg:items-stretch">
                        <Link href="/" className="p-3 mr-6">
                            <Image
                                src={isHome ? "/images/light-logo.png" : "/images/dark-logo.png"}
                                alt="Enrisk"
                                width={144}
                                height={63}
                                className="w-20 md:w-36"
                            />
                        </Link>
                        <Navigation />
                    </div>
                    <div className="hidden lg:flex gap-5 items-center">
                        <a href="#" target="_blank" className="group">
                            <Linkedin className={`transition-all w-6 ${isHome?"fill-white group-hover:fill-blue-500":"fill-stone-400 group-hover:fill-blue-700"}`} />
                        </a>
                        <a href="#" target="_blank" className="group">
                        <Twitter className={`transition-all w-6 ${isHome?"fill-white group-hover:fill-sky-500":"fill-stone-400 group-hover:fill-sky-500"}`} />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;