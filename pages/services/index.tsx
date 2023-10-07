import fs from 'fs/promises';
import path from 'path';

import { GetStaticPropsResult } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import Layout from '../../components/shared/Layout';
import { Service } from '@/types';
import { ChevronRight } from '@/components/shared/icons';

type Props = {
    services: Service[]
}

const Services: React.FC<Props> = props => {

    const { services } = props;

    return (
        <Layout>
            <div className='max-w-7xl mx-auto px-3 py-4 lg:py-8 sm:text-justify'>
                <h1 className='font-bold text-xl xl:text-3xl mb-4 lg:mb-8 text-center'>Servises</h1>
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
        </Layout>
    )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend-data.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData.toString());
    const servicesData = data.services;

    return {
        props: { services: servicesData },
    };

}


export default Services;