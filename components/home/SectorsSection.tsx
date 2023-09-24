import Image from "next/image";
import Link from "next/link";

import { Sector } from "@/types";

const SectorsSection: React.FC <{sectors:Sector[]}> = ({sectors}) => {


    return (
        <section className="py-10 xl:py-20">
            <div className='max-w-7xl mx-auto'>
                <h3 className="text-center mb-4 lg:mb-8 text-xl lg:text-2xl font-bold text-stone-400">Our Sectors Coverages</h3>
                <div className="sm:flex flex-wrap justify-center">
                    {sectors.map(sector => (
                        <div className="p-3 shrink-0 sm:basis-1/2 lg:basis-1/5" key={sector.title}>
                            <Link href={sector.url} className="relative block transition-all duration-300 xl:scale-100 xl:hover:scale-105">
                                <Image 
                                    src={sector.thumbnailUrl} 
                                    alt={sector.title} 
                                    width={300} 
                                    height={100}
                                    className="rounded-xl mb-2 mx-auto"
                                />
                                <h3 className="text-center font-semibold text-sky-600">
                                    {sector.title}
                                </h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SectorsSection;
