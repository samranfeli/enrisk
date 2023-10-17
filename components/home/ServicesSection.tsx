import { Service } from "@/types";
import ServiceItem from "../shared/ServiceItem";

const ServicesSection: React.FC<{ services: Service[] }> = ({ services }) => {

    return (
        <section className="py-10 xl:py-20">
            <div className='max-w-7xl mx-auto'>
                <h3 className="text-center mb-4 lg:mb-8 text-xl lg:text-2xl font-bold text-stone-400">Services We Provide</h3>

                <div className="sm:flex flex-wrap">
                    {services.map((serviceItem,itemOndex) => <ServiceItem key={serviceItem.title} service={serviceItem} index={itemOndex} />)}
                </div>

            </div>
        </section>
    )
}

export default ServicesSection;
