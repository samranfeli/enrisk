import fs from 'fs/promises';
import path from 'path';

import { GetStaticPropsResult } from 'next';

import Layout from '../../components/shared/Layout';
import { Sector } from '@/types';
import SectorItem from '@/components/shared/SectorItem';

type Props = {
    sectors: Sector[]
}

const Sectors: React.FC<Props> = props => {

    const { sectors } = props;

    return (
        <Layout>
            <div className='max-w-7xl mx-auto px-3 py-4 lg:py-8'>
                <h1 className='font-bold text-xl xl:text-3xl mb-4 lg:mb-8 text-center'>Sectors</h1>
                <div className="sm:flex flex-wrap">
                    {sectors.map((sector,index) => <SectorItem key={sector.title} sector={sector} index={index} /> )}
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend-data.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData.toString());
    const sectorsData = data.sectors;

    return {
        props: { sectors: sectorsData },
    };

}

export default Sectors;