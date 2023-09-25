import fs from 'fs/promises';
import path from 'path';

import Image from 'next/image';
import { GetStaticPropsContext, GetStaticPropsResult, GetStaticPathsResult } from 'next';
import parse from 'html-react-parser';

import Layout from '../../components/shared/Layout';
import { Service } from '@/types';

type Props = {
    service?: Service
}

const Services: React.FC<Props> = props => {
    const { service } = props;
    if (!service) {
        return null;
    }
    return (
        <Layout>
            <Image 
                src={service.imageUrl} 
                alt={service.title} 
                width={1600} 
                height={900} 
                className='w-full lg:banner-ratio lg:object-cover lg:object-center'
                placeholder ="blur"  
                blurDataURL={service.thumbnailUrl}  
            />            
            <div className='max-w-7xl mx-auto px-3 py-4 lg:py-8 sm:text-justify'>
                <h1 className='font-bold text-xl xl:text-3xl mb-4 lg:mb-8'>{service.title}</h1>
                {parse(service.content || "")}
            </div>
        </Layout>
    )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
    return {
        paths: [
            { params: { url: 'project-risk-assessment-and-management' } },
            { params: { url: 'reliability-analysis' } },
            { params: { url: 'decision-analysis' } },
            { params: { url: 'economic-evaluation-of-contracts' } },
            { params: { url: 'training' } }
        ],
        fallback: false
    };
}

export async function getStaticProps({ params }: GetStaticPropsContext<{ url: string }>): Promise<GetStaticPropsResult<Props>> {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend-data.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData.toString());
    const sericesData = data.services;

    const service = sericesData.find((service: Service) => service.url ===  '/services/'+ params!.url);

    return {
        props: { service: service },
    };

}


export default Services;
