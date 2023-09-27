import Image from "next/image";
import Link from "next/link";

import { Service } from "@/types";

const ServicesSection: React.FC<{services:Service[]}> = ({services}) => {

    return (
        <section className="xl:py-20">
            <div className='max-w-7xl mx-auto'>
                <div className="flex flex-wrap">
                    {services.map((serviceItem,serviceIndex) => (
                        <div key={serviceItem.title} className={`p-px xl:p-2 grow-0 shrink-0 ${serviceIndex<2?"basis-1/2":"basis-1/3"} lg:basis-1/5`}>
                            <Link href={serviceItem.url} className="relative block group">
                                <Image 
                                    src={serviceItem.thumbnailUrl} 
                                    alt={serviceItem.title} 
                                    width={300} 
                                    height={100}
                                    className="square lg:object-center lg:object-cover w-full xl:rounded-xl"
                                />
                                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-center p-1 md:p-4 bg-black/50 lg:bg-black/75 xl:rounded-xl transition-all xl:opacity-0 xl:group-hover:opacity-100">
                                    <h3 className="xl:scale-75 xl:group-hover:scale-100 xl:font-semibold text-white transition-all duration-300">
                                        {serviceItem.title}
                                    </h3>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesSection;
