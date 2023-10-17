import { Sector } from "@/types";
import SectorItem from "../shared/SectorItem";

const SectorsSection: React.FC <{sectors:Sector[]}> = ({sectors}) => {

    return (
        <section className="py-10 xl:py-20">
            <div className='max-w-7xl mx-auto'>
                <h3 className="text-center mb-4 lg:mb-8 text-xl lg:text-2xl font-bold text-stone-400">Our Sectors Coverages</h3>

                <div className="sm:flex flex-wrap">
                    {sectors.map((sector,index) => <SectorItem key={sector.title} sector={sector} index={index} />)}
                </div>

            </div>
        </section>
    )
}

export default SectorsSection;
