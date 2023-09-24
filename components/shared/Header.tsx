import Image from "next/image"
import Link from "next/link";
import Navigation from "./Navigation";

const Header : React.FC = () => {
    return(
        <header className="bg-stone-100">
            <div className="max-w-7xl mx-auto px-3">
                <div className="flex justify-between">
                    <Link href="/" className="p-3">
                        <Image 
                            src='/images/logo.png' 
                            alt="Enrisk" 
                            width={192} 
                            height={85}
                            className="w-20 md:w-48"
                        />
                    </Link>
                    <Navigation />
                </div>
            </div>
        </header>
    )
}

export default Header;