import Image from "next/image";
import Link from "next/link";

import { ChevronRight } from "../shared/icons";
import { Service } from "@/types";

const ServicesSection: React.FC<{services:Service[]}> = ({services}) => {

    return (
        <section className="py-10 xl:py-20">
            <div className='max-w-7xl mx-auto'>
                <h3 className="text-center mb-4 lg:mb-8 text-xl lg:text-2xl font-bold text-stone-400">Services We Provide</h3>
               
                <div className="sm:flex flex-wrap">
                    {services.map(serviceItem => (
                        <div key={serviceItem.title} className="p-3 xl:p-4 grow-0 shrink-0 sm:basis-1/2 lg:basis-1/3">
                            <Image 
                                src={serviceItem.thumbnailUrl} 
                                alt={serviceItem.title} 
                                width={300} 
                                height={100}
                                className="w-full mb-3 box-shadow"
                            />
                            <h3 className="font-semibold text-xl leading-6 sm:text-2xl mb-3 px-4 border-l-4 border-amber-500">
                                {serviceItem.title}
                            </h3>
                            <p className="leading-5 text-stone-400 mb-3">
                                {serviceItem.shortDescription}
                            </p>
                            <Link href={serviceItem.url} className="relative block group text-red-700 hover:text-red-500">
                                 Read More <ChevronRight className="w-7 h-7 inline-block fill-current relative transition-all right-2 group-hover:right-0" />
                            </Link>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    )
}

export default ServicesSection;
