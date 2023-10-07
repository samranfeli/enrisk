import Image from "next/image";
import Link from "next/link";

import { Sector } from "@/types";

const SectorsSection: React.FC <{sectors:Sector[]}> = ({sectors}) => {

    return (
        <section className="py-10 xl:py-20">
            <div className='max-w-7xl mx-auto'>
                <h3 className="text-center mb-4 lg:mb-8 text-xl lg:text-2xl font-bold text-stone-400">Our Sectors Coverages</h3>

                <div className="sm:flex flex-wrap">
                    {sectors.map(sector => (
                        <div className="p-3 shrink-0 sm:basis-1/2 lg:basis-1/3" key={sector.title}>
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
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SectorsSection;
