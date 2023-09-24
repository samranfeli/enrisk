import fs from 'fs/promises';
import path from 'path';

import { GetStaticPropsResult } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import Layout from '../../components/shared/Layout';
import { Service } from '@/types';

type Props = {
    services: Service[]
}

const Services: React.FC<Props> = props => {

    const { services } = props;

    return (
        <Layout>
            <div className='max-w-7xl mx-auto px-3 py-4 lg:py-8 sm:text-justify'>
                <h1 className='font-bold text-xl xl:text-3xl mb-4 lg:mb-8 text-center'>Servises</h1>
                <div className="sm:flex flex-wrap justify-center">
                    {services.map(service => (
                        <div className="p-3 lg:mb-5 shrink-0 sm:basis-1/2 lg:basis-1/3" key={service.title}>
                            <Link href={service.url} className="relative block transition-all duration-300 xl:scale-100 xl:hover:scale-105">
                                <Image
                                    src={service.thumbnailUrl}
                                    alt={service.title}
                                    width={300}
                                    height={100}
                                    className="rounded-xl mb-2 mx-auto"
                                />
                                <h3 className="text-center font-semibold text-sky-600">
                                    {service.title}
                                </h3>
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