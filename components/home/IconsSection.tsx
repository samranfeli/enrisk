import Image from "next/image";

export default function IconsSection() {
    return (
        <section className='py-10 md:py-20 bg-stone-100'>
            <div className='px-3 text-center'>
                <div className="flex gap-4 md:gap-8 flex-wrap justify-center">
                    <Image src="/images/icons/2.jpg" alt="" width={150} height={150} className="w-24 h-24 md:w-36 md:h-36 box-shadow" />
                    <Image src="/images/icons/3.jpg" alt="" width={150} height={150} className="w-24 h-24 md:w-36 md:h-36 box-shadow" />
                    <Image src="/images/icons/7.jpg" alt="" width={150} height={150} className="w-24 h-24 md:w-36 md:h-36 box-shadow" />
                    <Image src="/images/icons/8.jpg" alt="" width={150} height={150} className="w-24 h-24 md:w-36 md:h-36 box-shadow" />
                    <Image src="/images/icons/9.jpg" alt="" width={150} height={150} className="w-24 h-24 md:w-36 md:h-36 box-shadow" />
                    <Image src="/images/icons/12.jpg" alt="" width={150} height={150} className="w-24 h-24 md:w-36 md:h-36 box-shadow" />
                    <Image src="/images/icons/13.jpg" alt="" width={150} height={150} className="w-24 h-24 md:w-36 md:h-36 box-shadow" />
                </div>
            </div>
        </section>
    )
}