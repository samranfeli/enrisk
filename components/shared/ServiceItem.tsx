import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

import { ChevronRight } from "./icons";
import { Service } from "@/types";

const ServiceItem: React.FC<{ service: Service, index?:number }> = ({ service,index }) => {
    
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
        <div ref={ref} className={`p-3 xl:p-4 grow-0 shrink-0 sm:basis-1/2 lg:basis-1/3`}>
            <Image
                src={service.thumbnailUrl}
                alt={service.title}
                width={300}
                height={100}
                className={`w-full mb-3 box-shadow transition-all ease-in duration-300 ${delayClass} ${inView?"opacity-100 scale-100":"scale-90 opacity-0"}`}
            />
            <div className={`relative transition-all duration-500 ease-in ${delayClass} ${inView?"opacity-100 top-0":"-top-5 opacity-0"}`}>
                <h3 className="font-semibold text-xl leading-6 sm:text-2xl mb-3 px-4 border-l-4 border-amber-500">
                    {service.title}
                </h3>
                <p className="leading-5 text-stone-400 mb-3">
                    {service.shortDescription}
                </p>
                <Link href={service.url} className="relative block group text-red-700 hover:text-red-500">
                    Read More <ChevronRight className="w-7 h-7 inline-block fill-current relative transition-all right-2 group-hover:right-0" />
                </Link>
            </div>
        </div>
    )
}

export default ServiceItem;
