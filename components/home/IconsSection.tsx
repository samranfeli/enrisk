import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function IconsSection() {
    const [ref, inView] = useInView({triggerOnce:true,threshold:.3 });
    const icons = [
        {url:'/images/icons/2.jpg', title:"Zero hunger",delayClass:""},
        {url:'/images/icons/3.jpg', title:"Good health and well-being",delayClass:"delay-100"},
        {url:'/images/icons/7.jpg', title:"Affordable and clean energy",delayClass:"delay-200"},
        {url:'/images/icons/8.jpg', title:"Decent work and economic growth",delayClass:"delay-300"},
        {url:'/images/icons/9.jpg', title:"Industry, innovation and infrastructure",delayClass:"delay-500"},
        {url:'/images/icons/12.jpg', title:"Responsible consumption and production",delayClass:"delay-700"},
        {url:'/images/icons/13.jpg', title:"Climate action",delayClass:"delay-1000"}
    ];
    
    return (
        <section className='py-10 md:py-20 bg-stone-100' ref={ref}>
            <div className='px-3 text-center'>
                <div className="flex gap-4 md:gap-8 flex-wrap justify-center">

                    {icons.map(item=>(
                        <Image 
                            src={item.url} 
                            alt={item.title} 
                            width={150} 
                            height={150} 
                            className={`w-24 h-24 md:w-36 md:h-36 box-shadow relative transition-all ease duration-700 ${item.delayClass} ${inView?"opacity-100 top-0":"-top-5 opacity-0"}`}
                        />
                    ))}

                </div>
            </div>
        </section>
    )
}