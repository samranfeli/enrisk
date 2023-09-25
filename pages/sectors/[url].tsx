import fs from 'fs/promises';
import path from 'path';

import Image from 'next/image';
import { GetStaticPropsContext, GetStaticPropsResult, GetStaticPathsResult } from 'next';
import parse from 'html-react-parser';

import Layout from '../../components/shared/Layout';
import { Sector } from '@/types';

type Props = {
    sector?: Sector
}

const Sectors: React.FC<Props> = props => {
    const { sector } = props;
    if (!sector) {
        return null;
    }
    return (
        <Layout>
            <Image 
                src={sector.imageUrl} 
                alt={sector.title} 
                width={1600} 
                height={900} 
                className='w-full lg:banner-ratio lg:object-cover lg:object-center'
                loading='eager'
            />
            <div className='max-w-7xl mx-auto px-3 py-4 lg:py-8 sm:text-justify'>
                <h1 className='font-bold text-xl xl:text-3xl mb-4 lg:mb-8'>{sector.title}</h1>
                {parse(sector.content || "")}
            </div>
        </Layout>
    )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
    return {
        paths: [
            { params: { url: 'upstream-oil-and-gas-exploration-and-production' } },
            { params: { url: 'midstream-oil-and-gas-lng-developments' } },
            { params: { url: 'downstream-oil-and-gas' } },
            { params: { url: 'alternative-energies' } },
            { params: { url: 'transportation-infrastructures' } }
        ],
        fallback: false
    };
}

export async function getStaticProps({ params }: GetStaticPropsContext<{ url: string }>): Promise<GetStaticPropsResult<Props>> {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend-data.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData.toString());
    const sectorsData = data.sectors;

    const sector = sectorsData.find((sector: Sector) => sector.url === "/sectors/" + params!.url);

    return {
        props: { sector: sector },
    };

}


export default Sectors;
