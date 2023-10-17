import fs from 'fs/promises';
import path from 'path';

import { GetStaticPropsResult } from 'next';

import { Service } from '@/types';
import ServiceItem from '@/components/shared/ServiceItem';
import Layout from '../../components/shared/Layout';

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
                    {services.map((serviceItem,itemIndex) => <ServiceItem key={serviceItem.title} service={serviceItem} index={itemIndex} /> )}
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