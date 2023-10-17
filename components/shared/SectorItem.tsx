import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

import { Sector } from "@/types";

const SectorItem: React.FC<{ sector: Sector,index?:number }> = ({ sector,index }) => {

    const [ref, inView] = useInView({triggerOnce:true,threshold:.3 });

    let delayClass = "delay-100";
    if(index === 1){
        delayClass = "delay-300"
    }
    if(index === 2){
        delayClass = "delay-500"
    }
    if(index === 3){
        delayClass = "delay-700"
    }
    if(index === 4){
        delayClass = "delay-1000"
    }
    
    return (
        <div 
            key={sector.title} 
            className={`p-3 shrink-0 sm:basis-1/2 lg:basis-1/3 transition-all ease-in duration-300 ${delayClass} ${inView?"opacity-100 scale-100":"scale-90 opacity-0"}`} 
            ref={ref}
        >
            <Link href={sector.url} className="relative block group overflow-hidden box-shadow">
                <Image
                    src={sector.thumbnailUrl}
                    alt={sector.title}
                    width={300}
                    height={100}
                    className="mb-2 w-full scale-100 group-hover:scale-105 transition-all duration-300 ease-in-out"
                />
                <h3 className="font-semibold text-amber-500 absolute bottom-0 left-0 right-0 p-3 pt-20 bg-gradient-to-t from-black to-transparent">
                    {sector.title}
                </h3>
            </Link>
        </div>
    )
}

export default SectorItem;
